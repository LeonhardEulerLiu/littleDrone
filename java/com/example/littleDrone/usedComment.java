package com.example.littleDrone;

public class usedComment {
	private Integer id;
	private String nickName;
	private String avatar;
	private String commTime;
	private String commCont;
	
	public usedComment(Integer id, String nickName, String avatar, String commTime, String commCont) {
		super();
		this.id = id;
		this.nickName = nickName;
		this.avatar = avatar;
		this.commTime = commTime;
		this.commCont = commCont;
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNickName() {
		return nickName;
	}
	public void setNickName(String nickName) {
		this.nickName = nickName;
	}
	public String getAvatar() {
		return avatar;
	}
	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}
	public String getCommTime() {
		return commTime;
	}
	public void setCommTime(String commTime) {
		this.commTime = commTime;
	}
	public String getCommCont() {
		return commCont;
	}
	public void setCommCont(String commCont) {
		this.commCont = commCont;
	}
	
	@Override
	public String toString() {
		return "usedComment {id: " + id + ", nickName: " + nickName + ", avatar: " + avatar + ", commTime: " + commTime
				+ ", commCont: " + commCont + "}";
	}
}
