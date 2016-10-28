package entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Job implements Serializable {
	private static final long serialVersionUID = 1L;

	// Fields
	
	@Id
	private int id;

	@Temporal(TemporalType.DATE)
	@Column(name="app_date")
	private Date appDate;

	private String city;

	@Column(name="company_name")
	private String companyName;

	@Column(name="contact_email")
	private String contactEmail;

	@Column(name="contact_fname")
	private String contactFname;

	@Column(name="contact_lname")
	private String contactLname;

	@Column(name="contact_phone")
	private String contactPhone;

	@Column(name="desired_salary")
	private float desiredSalary;

	@Column(name="job_title")
	private String jobTitle;

	private String notes;

	private String offer;

	@Column(name="offered_salary")
	private float offeredSalary;

	@Column(name="posting_url")
	private String postingUrl;

	@Column(name="sal_type")
	private String salType;

	@Temporal(TemporalType.DATE)
	@Column(name="start_date")
	private Date startDate;

	private String state;

	//bi-directional many-to-one association to User
	@ManyToOne
	@JoinColumn(name="user_id",referencedColumnName="id") 
	@JsonBackReference
	private User user;

	// Constructors
	
	public Job() {
	}

	public Job(int id, Date appDate, String city, String companyName, String contactEmail, String contactFname,
			String contactLname, String contactPhone, float desiredSalary, String jobTitle, String notes, String offer,
			float offeredSalary, String postingUrl, String salType, Date startDate, String state, User user) {
		super();
		this.id = id;
		this.appDate = appDate;
		this.city = city;
		this.companyName = companyName;
		this.contactEmail = contactEmail;
		this.contactFname = contactFname;
		this.contactLname = contactLname;
		this.contactPhone = contactPhone;
		this.desiredSalary = desiredSalary;
		this.jobTitle = jobTitle;
		this.notes = notes;
		this.offer = offer;
		this.offeredSalary = offeredSalary;
		this.postingUrl = postingUrl;
		this.salType = salType;
		this.startDate = startDate;
		this.state = state;
		this.user = user;
	}

	// Getters and Setters
	
	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getAppDate() {
		return this.appDate;
	}

	public void setAppDate(Date appDate) {
		this.appDate = appDate;
	}

	public String getCity() {
		return this.city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCompanyName() {
		return this.companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getContactEmail() {
		return this.contactEmail;
	}

	public void setContactEmail(String contactEmail) {
		this.contactEmail = contactEmail;
	}

	public String getContactFname() {
		return this.contactFname;
	}

	public void setContactFname(String contactFname) {
		this.contactFname = contactFname;
	}

	public String getContactLname() {
		return this.contactLname;
	}

	public void setContactLname(String contactLname) {
		this.contactLname = contactLname;
	}

	public String getContactPhone() {
		return this.contactPhone;
	}

	public void setContactPhone(String contactPhone) {
		this.contactPhone = contactPhone;
	}

	public float getDesiredSalary() {
		return this.desiredSalary;
	}

	public void setDesiredSalary(float desiredSalary) {
		this.desiredSalary = desiredSalary;
	}

	public String getJobTitle() {
		return this.jobTitle;
	}

	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}

	public String getNotes() {
		return this.notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public String getOffer() {
		return this.offer;
	}

	public void setOffer(String offer) {
		this.offer = offer;
	}

	public float getOfferedSalary() {
		return this.offeredSalary;
	}

	public void setOfferedSalary(float offeredSalary) {
		this.offeredSalary = offeredSalary;
	}

	public String getPostingUrl() {
		return this.postingUrl;
	}

	public void setPostingUrl(String postingUrl) {
		this.postingUrl = postingUrl;
	}

	public String getSalType() {
		return this.salType;
	}

	public void setSalType(String salType) {
		this.salType = salType;
	}

	public Date getStartDate() {
		return this.startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public String getState() {
		return this.state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public User getUser() {
		return this.user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	// toString
	
	@Override
	public String toString() {
		return "Job [id=" + id + ", appDate=" + appDate + ", city=" + city + ", companyName=" + companyName
				+ ", contactEmail=" + contactEmail + ", contactFname=" + contactFname + ", contactLname=" + contactLname
				+ ", contactPhone=" + contactPhone + ", desiredSalary=" + desiredSalary + ", jobTitle=" + jobTitle
				+ ", notes=" + notes + ", offer=" + offer + ", offeredSalary=" + offeredSalary + ", postingUrl="
				+ postingUrl + ", salType=" + salType + ", startDate=" + startDate + ", state=" + state + ", user="
				+ user.getId() + "]";
	}
}