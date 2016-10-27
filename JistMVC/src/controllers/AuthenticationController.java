package controllers;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

import data.JobsDAO;
import entities.User;
import security.JsonWebTokenGenerator;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {

	@Autowired
	JsonWebTokenGenerator jwtGen;
	
	@Autowired
	JobsDAO jobsDAO;
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public Map<String, String> login(HttpServletRequest req, HttpServletResponse res, @RequestBody String userJsonString) {
		ObjectMapper mapper = new ObjectMapper();
		User user = null;
		try{
			user = mapper.readValue(userJsonString, User.class);
		}catch(Exception e) {
			e.printStackTrace();
		}
		try{
			user = jobsDAO.authenticateUser(user);
		}catch(Exception e) {
			e.printStackTrace();
			user = null;
		}
		Map<String, String> responseJson = new HashMap<>();
		if(user != null){
		String jws = jwtGen.generateUserJwt(user);
		responseJson.put("jwt", jws);
		return responseJson;	
		}else {
			res.setStatus(400);
			responseJson.put("error", "Incorrect Password");
			return responseJson;
		}
	
	}
	@RequestMapping(value = "/signup", method = RequestMethod.POST)
	public Map<String, String> signup(HttpServletRequest req, HttpServletResponse res, @RequestBody String userJson) {
		ObjectMapper mapper = new ObjectMapper();
		System.out.println("*********Before parse requestbody*********");
		User user = null;
		try{
			user = mapper.readValue(userJson, User.class);
			System.out.println("*********USER*********");
			System.out.println(user);
		}catch(IOException ie) {
			System.out.println("*********ERROR*********");
			ie.printStackTrace();
		}
		user = jobsDAO.create(user);
		System.out.println("*********DAO USER*********");
		System.out.println(user);
		String jws = jwtGen.generateUserJwt(user);
		Map<String, String> responseJson = new HashMap<>();
		responseJson.put("jwt", jws);
		System.out.println("*********JWT*********");
		System.out.println(responseJson);
		return responseJson;
	}

}
