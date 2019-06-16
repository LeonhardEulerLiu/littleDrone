package com.example.littleDrone;
import java.util.List;

/*
 * 考虑一下：是否有必要在前台为comments对象相应的请求添加id与state？会自动补全吗？
 * */

public interface droneService {
	List<newsSwiper> fetchNewsSwiper();
	List<newsList> fetchNewsList();
	newsContent fetchNewsContent(Integer id);
	List<usedComment> fetchNewsComment(Integer typeId);
	
	List<videoSwiper> fetchVideoSwiper();
	List<videoList> fetchVideoList();
	videoContent fetchVideoContent(Integer id);
	List<usedComment> fetchVideoComment(Integer typeId);
	
	List<searchList> fetchSearchList(String query);
	int addComment(comments comment);
	
	List<news> fetchNews();
	int manSerInsNews(news m);
	int manSerUpdNews(news m);
	int manSerDelNews(Integer m);
	
	List<videos> fetchVideo();
	int manSerInsVideo(videos m);
	int manSerUpdVideo(videos m);
	int manSerDelVideo(Integer m);
	
	List<comments> fetchComm();
	int manSerInsComm(comments m);
	int manSerUpdComm(comments m);
	int manSerDelComm(Integer m);
	
	news laySerUpdNews(Integer m);
	List<news> laySerSelNews(Integer page, Integer limit);
	List<news> laySerSiftNews(Integer page, Integer limit, String state, String title, String pubTime, 
			String author, String content);
	
	videos laySerUpdVideo(Integer m);
	List<videos> laySerSelVideo(Integer page, Integer limit);
	List<videos> laySerSiftVideo(Integer page, Integer limit, String state, String title, String pubTime, 
			String author, String content);
	
	comments laySerUpdComm(Integer m);
	List<comments> laySerSelComm(Integer page, Integer limit);
	List<comments> laySerSiftComm(Integer page, Integer limit, String state, String nickName, String avatar, String commTime, 
			String commCont, String type, String typeId);
}
