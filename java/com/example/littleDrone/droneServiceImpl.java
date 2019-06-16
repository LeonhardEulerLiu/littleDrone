package com.example.littleDrone;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class droneServiceImpl implements droneService {
	@Autowired
	private droneMapper map;

	@Override
	public List<newsSwiper> fetchNewsSwiper() {
		// TODO Auto-generated method stub
		return map.selectNewsSwiper();
	}

	@Override
	public List<newsList> fetchNewsList() {
		// TODO Auto-generated method stub
		return map.selectNewsList();
	}

	@Override
	public newsContent fetchNewsContent(Integer id) {
		// TODO Auto-generated method stub
		map.updateNewsReadcount(id);
		return map.selectNewsContent(id);
	}

	@Override
	public List<usedComment> fetchNewsComment(Integer typeId) {
		// TODO Auto-generated method stub
		return map.selectNewsComment(typeId);
	}

	@Override
	public List<videoSwiper> fetchVideoSwiper() {
		// TODO Auto-generated method stub
		return map.selectVideoSwiper();
	}

	@Override
	public List<videoList> fetchVideoList() {
		// TODO Auto-generated method stub
		return map.selectVideoList();
	}

	@Override
	public videoContent fetchVideoContent(Integer id) {
		// TODO Auto-generated method stub
		map.updateVideoReadcount(id);
		return map.selectVideoContent(id);
	}

	@Override
	public List<usedComment> fetchVideoComment(Integer typeId) {
		// TODO Auto-generated method stub
		return map.selectVideoComment(typeId);
	}

	@Override
	public List<searchList> fetchSearchList(String query) {
		// TODO Auto-generated method stub
		return map.selectSearchList(query);
	}

	@Override
	public int addComment(comments comment) {
		// TODO Auto-generated method stub
		return map.insertComment(comment);
	}

	@Override
	public List<news> fetchNews() {
		// TODO Auto-generated method stub
		return map.selectNews();
	}

	@Override
	public int manSerInsNews(news m) {
		// TODO Auto-generated method stub
		return map.insertNewsMan(m);
	}

	@Override
	public int manSerUpdNews(news m) {
		// TODO Auto-generated method stub
		return map.updateNewsMan(m);
	}

	@Override
	public int manSerDelNews(Integer m) {
		// TODO Auto-generated method stub
		return map.deleteNewsMan(m);
	}

	@Override
	public List<videos> fetchVideo() {
		// TODO Auto-generated method stub
		return map.selectVideo();
	}

	@Override
	public int manSerInsVideo(videos m) {
		// TODO Auto-generated method stub
		return map.insertVideoMan(m);
	}

	@Override
	public int manSerUpdVideo(videos m) {
		// TODO Auto-generated method stub
		return map.updateVideoMan(m);
	}

	@Override
	public int manSerDelVideo(Integer m) {
		// TODO Auto-generated method stub
		return map.deleteVideoMan(m);
	}

	@Override
	public List<comments> fetchComm() {
		// TODO Auto-generated method stub
		return map.selectComm();
	}

	@Override
	public int manSerInsComm(comments m) {
		// TODO Auto-generated method stub
		return map.insertCommMan(m);
	}

	@Override
	public int manSerUpdComm(comments m) {
		// TODO Auto-generated method stub
		return map.updateCommMan(m);
	}

	@Override
	public int manSerDelComm(Integer m) {
		// TODO Auto-generated method stub
		return map.deleteCommMan(m);
	}

	@Override
	public news laySerUpdNews(Integer m) {
		// TODO Auto-generated method stub
		return map.showNewsToLay(m);
	}

	@Override
	public List<news> laySerSelNews(Integer page, Integer limit) {
		// TODO Auto-generated method stub
		return map.selectNewsPage((page-1)*limit, limit);
	}

	@Override
	public List<news> laySerSiftNews(Integer page, Integer limit, String state, String title, String pubTime, String author, String content) {
		// TODO Auto-generated method stub
		return map.siftNews((page-1)*limit, limit, state, title, pubTime, author, content);
	}

	@Override
	public videos laySerUpdVideo(Integer m) {
		// TODO Auto-generated method stub
		return map.showVideoToLay(m);
	}

	@Override
	public List<videos> laySerSelVideo(Integer page, Integer limit) {
		// TODO Auto-generated method stub
		return map.selectVideoPage((page-1)*limit, limit);
	}

	@Override
	public List<videos> laySerSiftVideo(Integer page, Integer limit, String state, String title, String pubTime,
			String author, String content) {
		// TODO Auto-generated method stub
		return map.siftVideo((page-1)*limit, limit, state, title, pubTime, author, content);
	}

	@Override
	public comments laySerUpdComm(Integer m) {
		// TODO Auto-generated method stub
		return map.showCommToLay(m);
	}

	@Override
	public List<comments> laySerSelComm(Integer page, Integer limit) {
		// TODO Auto-generated method stub
		return map.selectCommPage((page-1)*limit, limit);
	}

	@Override
	public List<comments> laySerSiftComm(Integer page, Integer limit, String state, String nickName, String avatar,
			String commTime, String commCont, String type, String typeId) {
		// TODO Auto-generated method stub
		return map.siftComm((page-1)*limit, limit, state, nickName, avatar, commTime, commCont, type, typeId);
	}

}
