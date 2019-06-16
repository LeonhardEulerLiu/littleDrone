package com.example.littleDrone;

public class commSifter {
	private Integer start;
	private Integer limit;
	private String state;
	private String nickName;
	private String avatar;
	private String commTime;
	private String commCont;
	private String type;
	private String typeId;
	
	public commSifter(Integer start, Integer limit, String state, String nickName, String avatar, String commTime,
			String commCont, String type, String typeId) {
		super();
		this.start = start;
		this.limit = limit;
		this.state = state;
		this.nickName = nickName;
		this.avatar = avatar;
		this.commTime = commTime;
		this.commCont = commCont;
		this.type = type;
		this.typeId = typeId;
	}

	public Integer getStart() {
		return start;
	}

	public void setStart(Integer start) {
		this.start = start;
	}

	public Integer getLimit() {
		return limit;
	}

	public void setLimit(Integer limit) {
		this.limit = limit;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
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

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getTypeId() {
		return typeId;
	}

	public void setTypeId(String typeId) {
		this.typeId = typeId;
	}

	@Override
	public String toString() {
		return "commSifter {start: " + start + ", limit: " + limit + ", state: " + state + ", nickName: " + nickName
				+ ", avatar: " + avatar + ", commTime: " + commTime + ", commCont: " + commCont + ", type: " + type
				+ ", typeId: " + typeId + "}";
	}
}
