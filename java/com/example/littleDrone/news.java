package com.example.littleDrone;

public class news {
	private Integer id;
	private Integer state;
	private String title;
	private String titlePic;
	private String pubTime;
	private String author;
	private Integer readCount;
	private String content;
	
	public news(Integer id, Integer state, String title, String titlePic, String pubTime, String author,
			Integer readCount, String content) {
		super();
		this.id = id;
		this.state = state;
		this.title = title;
		this.titlePic = titlePic;
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
	public Integer getState() {
		return state;
	}
	public void setState(Integer state) {
		this.state = state;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getTitlePic() {
		return titlePic;
	}
	public void setTitlePic(String titlePic) {
		this.titlePic = titlePic;
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
		return "news {id: " + id + ", state: " + state + ", title: " + title + ", titlePic: " + titlePic + ", pubTime: "
				+ pubTime + ", author: " + author + ", readCount: " + readCount + ", content: " + content + "}";
	}
}
