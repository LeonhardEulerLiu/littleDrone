package com.example.littleDrone;

public class videoSifter {
	private Integer start;
	private Integer limit;
	private String state;
	private String title;
	private String pubTime;
	private String author;
	private String content;
	
	public videoSifter(Integer start, Integer limit, String state, String title, String pubTime, String author,
			String content) {
		super();
		this.start = start;
		this.limit = limit;
		this.state = state;
		this.title = title;
		this.pubTime = pubTime;
		this.author = author;
		this.content = content;
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

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getPubTime() {
		return pubTime;
	}

	public void setPubTime(String pubTime) {
		this.pubTime = pubTime;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	@Override
	public String toString() {
		return "videoSifter {start: " + start + ", limit: " + limit + ", state: " + state + ", title: " + title
				+ ", pubTime: " + pubTime + ", author: " + author + ", content: " + content + "}";
	}
}
