package com.example.littleDrone;

public class newsSwiper {
	private Integer id;
	private String title;
	private String titlePic;
	
	public newsSwiper(Integer id, String title, String titlePic) {
		super();
		this.id = id;
		this.title = title;
		this.titlePic = titlePic;
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
	
	@Override
	public String toString() {
		return "newsSwiper {id: " + id + ", title: " + title + ", titlePic: " + titlePic + "}";
	}
}
