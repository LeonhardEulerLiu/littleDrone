package com.example.littleDrone;

public class newsContent {
	private Integer id;
	private String title;
	private String pubTime;
	private String author;
	private Integer readCount;
	private String content;
	
	public newsContent(Integer id, String title, String pubTime, String author, Integer readCount, String content) {
		super();
		this.id = id;
		this.title = title;
		this.pubTime = pubTime;
		this.author = author;
		this.readCount = readCount;
		this.content = content;
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
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
	public Integer getReadCount() {
		return readCount;
	}
	public void setReadCount(Integer readCount) {
		this.readCount = readCount;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	
	@Override
	public String toString() {
		return "newsContent {id: " + id + ", title: " + title + ", pubTime: " + pubTime + ", author: " + author
				+ ", readCount: " + readCount + ", content: " + content + "}";
	}
}
