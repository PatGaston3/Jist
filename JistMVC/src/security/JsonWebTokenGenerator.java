package security;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import entities.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JsonWebTokenGenerator {
	@Autowired
	SecretKeyGenerator keyGen;
	
	public String generateUserJwt(User user) {
		Date now = new Date();
		Date tomorrow = new Date(now.getTime()+(1000*60*60*24));
		
		Map<String, Object> userJson = new HashMap<>();
		userJson.put("id", user.getId());
		userJson.put("username", user.getUsername());
		userJson.put("firstname", user.getFname());
		userJson.put("lastname", user.getLname());
		userJson.put("location", user.getLocation());
		
		String jwt = "";
		try{
			jwt = Jwts.builder()
					.setSubject("user")
					.setClaims(userJson)
					.setExpiration(tomorrow)
					.signWith(SignatureAlgorithm.HS512, keyGen.getSecretKey())
					.compact();
		}catch(NullPointerException ne) {
			ne.printStackTrace();
		}
		return jwt;
	}
	
}
