package controllers;

import java.text.ParseException;
import java.util.Collection;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

import data.JobsDAO;
import entities.Job;
import entities.User;

@RestController
public class JobsController {

	@Autowired
	BCryptPasswordEncoder passwordEncoder;

	@Autowired
	private JobsDAO jobsDAO;

	@RequestMapping(path = "ping", method = RequestMethod.GET)
	public String ping() {
		return "pong";
	}

	@RequestMapping(path = "user", method = RequestMethod.GET)
	public List<User> indexUsers() {
		return jobsDAO.indexUsers();
	}

	@RequestMapping(path = "user/{id}", method = RequestMethod.GET)
	public User showUser(@PathVariable int id) {
		return jobsDAO.showUser(id);
	}

	@RequestMapping(path = "user/{id}/joblist", method = RequestMethod.GET)
	public Collection<Job> showJobs(@PathVariable int id) {
		return jobsDAO.showJobs(id);
	}

	@RequestMapping(path = "user/{id}/joblist/{jId}", method = RequestMethod.GET)
	public Job showJob(@PathVariable int id, @PathVariable int jId) {
		return jobsDAO.showJob(jId);
	}

	@RequestMapping(path = "user/{id}", method = RequestMethod.PUT)
	public void updateUser(@PathVariable int id, @RequestBody String userJSON) {
		ObjectMapper mapper = new ObjectMapper();
		User user = null;
		try {
			user = mapper.readValue(userJSON, User.class);
		} catch (Exception e) {
			e.printStackTrace();
		}
		jobsDAO.update(id, user);
	}

	@RequestMapping(path = "user/{id}/joblist/{id}", method = RequestMethod.PUT)
	public void updateJobs(@PathVariable int id, @RequestBody String jobJSON) throws ParseException {
		ObjectMapper mapper = new ObjectMapper();
		Job job = null;
		try {
			job = mapper.readValue(jobJSON, Job.class);
		} catch (Exception e) {
			e.printStackTrace();
		}
		jobsDAO.update(id, job);
	}

	@RequestMapping(path = "user", method = RequestMethod.POST)
	public void createUser(@RequestBody String userJSON, HttpServletResponse res) {
		ObjectMapper mapper = new ObjectMapper();
		User user = null;
		try {
			user = mapper.readValue(userJSON, User.class);
		} catch (Exception e) {
			e.printStackTrace();
		}
		res.setStatus(201);
		jobsDAO.create(user);
	}

	@RequestMapping(path = "user/{id}/joblist", method = RequestMethod.POST)
	public void createJob(@PathVariable int id, @RequestBody String userJSON) {
		ObjectMapper mapper = new ObjectMapper();
		Job job = null;
		try {
			job = mapper.readValue(userJSON, Job.class);
		} catch (Exception e) {
			e.printStackTrace();
		}
		jobsDAO.createJob(id, job);
	}
	
	@RequestMapping(path = "user/{id}", method = RequestMethod.DELETE)
	public void destroyUser(@PathVariable int id) {
		jobsDAO.destroyUser(id);
	}
	
	@RequestMapping(path = "user/{id}/joblist/{jId}", method = RequestMethod.DELETE) 
	public void destroytJob(@PathVariable int id, @PathVariable int jId) {
		jobsDAO.destroyJob(id,  jId);
	}
}
