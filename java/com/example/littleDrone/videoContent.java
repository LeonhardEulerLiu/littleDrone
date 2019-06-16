package com.example.littleDrone;

public class videoContent {
	private Integer id;
	private String title;
	private String pubTime;
	private String author;
	private Integer readCount;
	private String content;
	private String videoSrc;
	
	public videoContent(Integer id, String title, String pubTime, String author, Integer readCount, String content,
			String videoSrc) {
		super();
		this.id = id;
		this.title = title;
		this.pubTime = pubTime;
		this.author = author;
		this.readCount = readCount;
		this.content = content;
		this.videoSrc = videoSrc;
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
	public String getVideoSrc() {
		return videoSrc;
	}
	public void setVideoSrc(String videoSrc) {
		this.videoSrc = videoSrc;
	}
	
	@Override
	public String toString() {
		return "videoContent {id: " + id + ", title: " + title + ", pubTime: " + pubTime + ", author: " + author
				+ ", readCount: " + readCount + ", content: " + content + ", videoSrc: " + videoSrc + "}";
	}
}
