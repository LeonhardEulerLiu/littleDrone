package com.example.littleDrone;

public class comments {
	private Integer id;
	private Integer state;
	private String nickName;
	private String avatar;
	private String commTime;
	private String commCont;
	private Integer type;
	private Integer typeId;
	
	public comments(Integer id, Integer state, String nickName, String avatar, String commTime, String commCont,
			Integer type, Integer typeId) {
		super();
		this.id = id;
		this.state = state;
		this.nickName = nickName;
		this.avatar = avatar;
		this.commTime = commTime;
		this.commCont = commCont;
		this.type = type;
		this.typeId = typeId;
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getState() {
		return state;
	}
	public void setState(Integer state) {
		this.state = state;
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
	public Integer getType() {
		return type;
	}
	public void setType(Integer type) {
		this.type = type;
	}
	public Integer getTypeId() {
		return typeId;
	}
	public void setTypeId(Integer typeId) {
		this.typeId = typeId;
	}
	
	@Override
	public String toString() {
		return "comments {id: " + id + ", state: " + state + ", nickName: " + nickName + ", avatar: " + avatar
				+ ", commTime: " + commTime + ", commCont: " + commCont + ", type: " + type + ", typeId: " + typeId
				+ "}";
	}
}
