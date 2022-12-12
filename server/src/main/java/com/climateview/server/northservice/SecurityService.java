package com.climateview.server.northservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.climateview.server.data.User;
import com.climateview.server.repository.UserRepository;
import com.climateview.server.security.MyPasswordEncoder;

@Service
public class SecurityService {
    
    @Autowired
    UserRepository repo;

    @Autowired
    MyPasswordEncoder myEncoder;


    @Value("${jwt.secret}")
    private String jwtKey;

    /**
     * Register new user or update existing one
     * @param uname
     * @param pw
     * @return
     */

     //Rekisteröinti
    
    public User register(String uname, String pw, String email){
        User u = new User(uname, myEncoder.encode(pw), email);
        repo.save(u);
        return u;
    }
    /**
     * Login user. Return token or null if not found or wrong password.
     * @param uname
     * @param pw
     * @return
     */

    //Sisäänkirjautuminen

    public String login(String uname, String pw){
     
        User u = repo.findById(uname).orElse(null);

        if(u == null || !myEncoder.matches(pw, u.password) ){
            return null;
        }
        Algorithm alg = Algorithm.HMAC256(jwtKey);
        return JWT.create().withSubject(u.username).sign(alg);
    }

    /**
     * Verify jwt token and return username if token is valid
     * @param jwtToken
     * @return
     */

    //Tokenin luominen

    public String validateJwt(String jwtToken){
        Algorithm alg = Algorithm.HMAC256(jwtKey);
        JWTVerifier verifier = JWT.require(alg).build();

        try {
            DecodedJWT jwt = verifier.verify(jwtToken);
            return jwt.getSubject();
        } catch (JWTVerificationException e) {
        }

        return null;
    }

    //Käyttäjän tallentaminen tietokantaan

    public User save(User user) {
        return repo.save(user);
    }

    //Käyttäjän poistaminen tietokannasta

    public void deleteUsername(String username) {

        repo.deleteById(username);
    }

    //Käyttäjätietojen hakeminen "GET" pyynnöllä tietokannasta

    public List<User> getUsers(){
        return repo.findAll();
    }

}