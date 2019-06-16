package com.example.littleDrone;

public class newsList {
	private Integer id;
	private String title;
	private String titlePic;
	private String author;
	private Integer readCount;
	
	public newsList(Integer id, String title, String titlePic, String author, Integer readCount) {
		super();
		this.id = id;
		this.title = title;
		this.titlePic = titlePic;
		this.author = author;
		this.readCount = readCount;
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
	public String getTitlePic() {
		return titlePic;
	}
	public void setTitlePic(String titlePic) {
		this.titlePic = titlePic;
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
	
	@Override
	public String toString() {
		return "newsList {id: " + id + ", title: " + title + ", titlePic: " + titlePic + ", author: " + author
				+ ", readCount: " + readCount + "}";
	}
}
