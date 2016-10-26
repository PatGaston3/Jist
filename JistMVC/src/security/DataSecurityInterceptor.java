package security;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;

@Component
public class DataSecurityInterceptor extends HandlerInterceptorAdapter{

	@Autowired
	  SecretKeyGenerator keyGen;
	 
	 @Override
	 public boolean preHandle(HttpServletRequest req, HttpServletResponse res, Object handler) throws Exception {
		 if(req.getHeader("x-access-token") != null) {
			 String jwt = req.getHeader("x-access-token");
			 Jws<Claims> jws = Jwts.parser()
					 				.setSigningKey(keyGen.getSecretKey())
					 				.parseClaimsJws(jwt);
			 int userId = (int) jws.getBody().get("id");
			 req.setAttribute("userId", userId);
			 
			 return true;
		 }
		 res.sendRedirect("http://localhost:8080/api/auth/unathorized");
		 return false;
	 }
	
}
