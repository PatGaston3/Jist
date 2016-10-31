package entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class User implements Serializable {
	private static final long serialVersionUID = 1L;
	
	// Fields
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;

	private String email;

	private String fname;

	private String lname;

	private String location;

	private String password;

	private String username;

	//bi-directional many-to-one association to Job
	@OneToMany(mappedBy="user", fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST,CascadeType.REMOVE})
	@JsonManagedReference
	private List<Job> jobs;


	// Constructors
	
	public User() {
	}

	public User(int id, String email, String fname, String lname, String location, String password, String username,
			List<Job> jobs) {
		super();
		this.id = id;
		this.email = email;
		this.fname = fname;
		this.lname = lname;
		this.location = location;
		this.password = password;
		this.username = username;
		this.jobs = jobs;
	}

	// Getters and Setters

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFname() {
		return this.fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return this.lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getLocation() {
		return this.location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public List<Job> getJobs() {
		return this.jobs;
	}

	public void setJobs(List<Job> jobs) {
		this.jobs = jobs;
	}

	public Job addJob(Job job) {
		getJobs().add(job);
		job.setUser(this);

		return job;
	}

	public Job removeJob(Job job) {
		getJobs().remove(job);
		job.setUser(null);

		return job;
	}
	
	// toString

	@Override
	public String toString() {
		return "User [id=" + id + ", email=" + email + ", fname=" + fname + ", lname=" + lname + ", location="
				+ location + ", password=" + password + ", username=" + username + ", jobs=" + jobs + "]";
	}
}