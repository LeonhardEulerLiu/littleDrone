package com.example.littleDrone;
import java.util.List;

/*
 * 请注意：下一次你可以考虑在前端筛选后台返回的全部数据，这样类就可以不这么多了。
 * 不过这回我们就先按这种方式做了。
 * */

public interface droneMapper {
	List<newsSwiper> selectNewsSwiper();
	List<newsList> selectNewsList();
	int updateNewsReadcount(Integer id);
	newsContent selectNewsContent(Integer id);
	List<usedComment> selectNewsComment(Integer typeId);
	
	List<videoSwiper> selectVideoSwiper();
	List<videoList> selectVideoList();
	int updateVideoReadcount(Integer id);
	videoContent selectVideoContent(Integer id);
	List<usedComment> selectVideoComment(Integer typeId);
	
	List<searchList> selectSearchList(String query);
	int insertComment(comments comment);
	
	List<news> selectNews();
	int insertNewsMan(news m);
	int updateNewsMan(news m);
	int deleteNewsMan(Integer m);
	
	List<videos> selectVideo();
	int insertVideoMan(videos m);
	int updateVideoMan(videos m);
	int deleteVideoMan(Integer m);
	
	List<comments> selectComm();
	int insertCommMan(comments m);
	int updateCommMan(comments m);
	int deleteCommMan(Integer m);
	
	news showNewsToLay(Integer m);
	List<news> selectNewsPage(Integer start, Integer limit);
	List<news> siftNews(Integer start, Integer limit, String state, String title, 
			String pubTime, String author, String content);
	
	videos showVideoToLay(Integer m);
	List<videos> selectVideoPage(Integer start, Integer limit);
	List<videos> siftVideo(Integer start, Integer limit, String state, String title, 
			String pubTime, String author, String content);
	
	comments showCommToLay(Integer m);
	List<comments> selectCommPage(Integer start, Integer limit);
	List<comments> siftComm(Integer start, Integer limit, String state, String nickName,
			String avatar, String commTime, String commCont, String type, String typeId);
}
