package com.example.littleDrone;

public class pager {
	private Integer page;
	private Integer limit;
	
	public pager(Integer page, Integer limit) {
		super();
		this.page = page;
		this.limit = limit;
	}

	public Integer getPage() {
		return page;
	}

	public void setPage(Integer page) {
		this.page = page;
	}

	public Integer getLimit() {
		return limit;
	}

	public void setLimit(Integer limit) {
		this.limit = limit;
	}

	@Override
	public String toString() {
		return "pager {page: " + page + ", limit: " + limit + "}";
	}
}
