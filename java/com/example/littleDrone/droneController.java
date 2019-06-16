package com.example.littleDrone;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

@Controller
@RequestMapping(value = "/drone")
public class droneController {
	@Autowired
	private droneServiceImpl service;
	
	@ResponseBody
	@RequestMapping(value = "/test", method = RequestMethod.GET)
	public void test()
	{
		System.out.println("Hello world! My SpringTest!");
	}
	
	@ResponseBody
	@RequestMapping(value = "/news/swiper", method = RequestMethod.GET)
	public List<newsSwiper> provideNewsSwiper() {
		return service.fetchNewsSwiper();
	}
	
	@ResponseBody
	@RequestMapping(value = "/news/list", method = RequestMethod.GET)
	public List<newsList> provideNewsList() {
		return service.fetchNewsList();
	}
	
	@ResponseBody
	@RequestMapping(value = "/news/content/{id}", method = RequestMethod.GET)
	public newsContent provideNewsContent(@PathVariable Integer id) {
		return service.fetchNewsContent(id);
	}
	
	@ResponseBody
	@RequestMapping(value = "/news/comment/{typeId}", method = RequestMethod.GET)
	public List<usedComment> provideNewsComment(@PathVariable Integer typeId) {
		return service.fetchNewsComment(typeId);
	}
	
	@ResponseBody
	@RequestMapping(value = "/video/swiper", method = RequestMethod.GET)
	public List<videoSwiper> provideVideoSwiper() {
		return service.fetchVideoSwiper();
	}
	
	@ResponseBody
	@RequestMapping(value = "/video/list", method = RequestMethod.GET)
	public List<videoList> provideVideoList() {
		return service.fetchVideoList();
	}
	
	@ResponseBody
	@RequestMapping(value = "/video/content/{id}", method = RequestMethod.GET)
	public videoContent provideVideoContent(@PathVariable Integer id) {
		return service.fetchVideoContent(id);
	}
	
	@ResponseBody
	@RequestMapping(value = "/video/comment/{typeId}", method = RequestMethod.GET)
	public List<usedComment> provideVideoComment(@PathVariable Integer typeId) {
		return service.fetchVideoComment(typeId);
	}
	
	//汉字解码问题
	@ResponseBody
	@RequestMapping(value = "/search/list/{query}", method = RequestMethod.GET)
	public List<searchList> provideSearchList(@PathVariable String query) throws UnsupportedEncodingException {
		return service.fetchSearchList(URLDecoder.decode(query, "UTF-8"));
	}
	
	//使用传统的?传参数；汉字解码问题
	@ResponseBody
	@RequestMapping(value = "/comment/submit", method = RequestMethod.GET)
	public int reportComment(Integer type, Integer typeId, String nickName,
			String avatar, String commTime, String commCont) throws UnsupportedEncodingException {
		return service.addComment
				(
					new comments
					(
						10000, 50, 
						URLDecoder.decode(nickName, "UTF-8"), 
						URLDecoder.decode(avatar, "UTF-8"), 
						URLDecoder.decode(commTime, "UTF-8"),
						URLDecoder.decode(commCont, "UTF-8"), 
						type, typeId
					)
				);
	}
	
	/**
	 * 注：在下面之所以没有指定method, 是为了使得POST与GET请求均可以获得对应的信息。这样，默认采用GET方式
	 * 获取数据的Layui Table或许就可以获取数据了
	 * @param msg
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "/manage/newsSelect")
	public List<news> provideNews(){
		System.out.println("init! provide news");
		return service.fetchNews();
	}
	
	@ResponseBody
	@RequestMapping(value = "/manage/newsInsert", method = RequestMethod.POST)
	public int manConInsNews(@RequestBody news msg) {
		return service.manSerInsNews(msg);
	}
	
	@ResponseBody
	@RequestMapping(value = "/manage/newsUpdate", method = RequestMethod.POST)
	public int manConUpdNews(@RequestBody news msg) {
		return service.manSerUpdNews(msg);
	}
	
	@ResponseBody
	@RequestMapping(value = "/manage/newsDelete", method = RequestMethod.POST)
	public int manConDelNews(@RequestBody Map map) {
		return service.manSerDelNews(Integer.parseInt(map.get("id")+""));
	}
	
	@ResponseBody
	@RequestMapping(value = "/manage/videoSelect")
	public List<videos> provideVideo(){
		return service.fetchVideo();
	}
	
	@ResponseBody
	@RequestMapping(value = "/manage/videoInsert", method = RequestMethod.POST)
	public int manConInsVideo(@RequestBody videos msg) {
		return service.manSerInsVideo(msg);
	}
	
	@ResponseBody
	@RequestMapping(value = "/manage/videoUpdate", method = RequestMethod.POST)
	public int manConUpdVideo(@RequestBody videos msg) {
		return service.manSerUpdVideo(msg);
	}
	
	@ResponseBody
	@RequestMapping(value = "/manage/videoDelete", method = RequestMethod.POST)
	public int manConDelVideo(@RequestBody Map map) {
		return service.manSerDelVideo(Integer.parseInt(map.get("id")+""));
	}
	
	@ResponseBody
	@RequestMapping(value = "/manage/commSelect")
	public List<comments> provideComm(){
		return service.fetchComm();
	}
	
	@ResponseBody
	@RequestMapping(value = "/manage/commInsert", method = RequestMethod.POST)
	public int manConInsComm(@RequestBody comments msg) {
		return service.manSerInsComm(msg);
	}
	
	@ResponseBody
	@RequestMapping(value = "/manage/commUpdate", method = RequestMethod.POST)
	public int manConUpdComm(@RequestBody comments msg) {
		return service.manSerUpdComm(msg);
	}
	
	@ResponseBody
	@RequestMapping(value = "/manage/commDelete", method = RequestMethod.POST)
	public int manConDelComm(@RequestBody Map map) {
		return service.manSerDelComm(Integer.parseInt(map.get("id")+""));
	}
	
	@ResponseBody
	@RequestMapping(value = "/manage/layui/newsUpdatePre", method = RequestMethod.POST)
	public news layConUpdNews(@RequestBody Map map) {
		System.out.println("init!");
		return service.laySerUpdNews(Integer.parseInt(map.get("id")+""));
	}
	
	@ResponseBody
	@RequestMapping(value = "/manage/layui/newsDeleteGroup", method = RequestMethod.POST)
	public int layConDelGroupNews(@RequestBody Map<String, Object> map) {
		List<Integer> a = (List<Integer>)map.get("deleted");
		for(int i=0; i<a.size(); i++) {
			service.manSerDelNews(a.get(i));
		}
		return 200;
	}
	
	@ResponseBody
	@RequestMapping(value = "/manage/layui/newsSelect")
	public List<news> layConSelNews(Integer page, Integer limit) {
		return service.laySerSelNews(page, limit);
	}
	
	@ResponseBody
	@RequestMapping(value = "/manage/layui/newsSift", method = RequestMethod.GET)
	public List<news> layConSiftNews(Integer page, Integer limit, String state, String title, String pubTime, String author, 
			String content) {
		return service.laySerSiftNews(page, limit, state, title, pubTime, author, content);
	}
	
	@ResponseBody
	@RequestMapping(value = "/manage/layui/videoUpdatePre", method = RequestMethod.POST)
	public videos layConUpdVideo(@RequestBody Map map) {
		System.out.println("init!");
		return service.laySerUpdVideo(Integer.parseInt(map.get("id")+""));
	}
	
	@ResponseBody
	@RequestMapping(value = "/manage/layui/videoSelect")
	public List<videos> layConSelVideo(Integer page, Integer limit) {
		return service.laySerSelVideo(page, limit);
	}
	
	@ResponseBody
	@RequestMapping(value = "/manage/layui/videoDeleteGroup", method = RequestMethod.POST)
	public int layConDelGroupVideo(@RequestBody Map<String, Object> map) {
		List<Integer> a = (List<Integer>)map.get("deleted");
		for(int i=0; i<a.size(); i++) {
			service.manSerDelVideo(a.get(i));
		}
		return 200;
	}
	
	@ResponseBody
	@RequestMapping(value = "/manage/layui/videoSift", method = RequestMethod.GET)
	public List<videos> layConSiftVideo(Integer page, Integer limit, String state, String title, String pubTime, String author, 
			String content) {
		return service.laySerSiftVideo(page, limit, state, title, pubTime, author, content);
	}
	
	@ResponseBody
	@RequestMapping(value = "/manage/layui/commUpdatePre", method = RequestMethod.POST)
	public comments layConUpdComm(@RequestBody Map map) {
		return service.laySerUpdComm(Integer.parseInt(map.get("id")+""));
	}
	
	@ResponseBody
	@RequestMapping(value = "/manage/layui/commSelect")
	public List<comments> layConSelComm(Integer page, Integer limit) {
		return service.laySerSelComm(page, limit);
	}
	
	@ResponseBody
	@RequestMapping(value = "/manage/layui/commDeleteGroup", method = RequestMethod.POST)
	public int layConDelGroupComm(@RequestBody Map<String, Object> map) {
		List<Integer> a = (List<Integer>)map.get("deleted");
		for(int i=0; i<a.size(); i++) {
			service.manSerDelComm(a.get(i));
		}
		return 200;
	}
	
	@ResponseBody
	@RequestMapping(value = "/manage/layui/commSift", method = RequestMethod.GET)
	public List<comments> layConSiftComm(Integer page, Integer limit, String state, String nickName, String avatar, String commTime, 
			String commCont, String type, String typeId) {
		return service.laySerSiftComm(page, limit, state, nickName, avatar, commTime, commCont, type, typeId);
	}
	
	@RequestMapping(value = "/manage/login")
	public String accessLogin() {
		return "login";
	}
	
	@RequestMapping(value = "/manage/login2")
	public String accessLogin2() {
		return "login2";
	}
	
	@RequestMapping(value = "/manage/index")
	public String menu() {
		return "index";
	}
	
	@RequestMapping(value = "/manage/newsMan")
	public String newsMan() {
		return "newsMan";
	}
	
	@RequestMapping(value = "/manage/videoMan")
	public String videoMan() {
		return "videoMan";
	}
	
	@RequestMapping(value = "/manage/commMan")
	public String commMan() {
		return "commMan";
	}
	
	@RequestMapping(value = "/manage/newsCheck")
	public String newsCheck() {
		return "newsCheck";
	}
	
	@RequestMapping(value = "/manage/videoCheck")
	public String videoCheck() {
		return "videoCheck";
	}
	
	@RequestMapping(value = "/manage/commCheck")
	public String commCheck() {
		return "commCheck";
	}
	
	@RequestMapping(value = "/manage/layui/welcome")
	public String welcomeToLayui() {
		return "learningLayui/welcome";
	}
	
//	@RequestMapping(value = "/manage/layui/welcome1")
//	public String welcome1() {
//		return "layui";
//	}
	
	@RequestMapping(value = "/manage/layui/firstGo")
	public String layui1() {
		return "learningLayui/firstGo";
	}
	
	@RequestMapping(value = "/manage/layui/login3")
	public String timoLogin() {
		return "learningLayui/login3";
	}
	
	@RequestMapping(value = "/manage/layui/timoTool")
	public String timoTool() {
		return "learningLayui/timoTool";
	}
	
	@RequestMapping(value = "/manage/layui/layDate")
	public String layDate() {
		return "learningLayui/layDate";
	}
	
	@RequestMapping(value = "/manage/layui/newsInsert")
	public String newsInsert() {
		return "learningLayui/newsInsert";
	}
	
	@RequestMapping(value = "/manage/layui/newsUpdate")
	public String newsUpdate() {
		return "learningLayui/newsUpdate";
	}
	
	@RequestMapping(value = "/manage/layui/newsCheckLay")
	public String newsCheckLay() {
		return "learningLayui/newsCheckLay";
	}
	
	@RequestMapping(value = "/manage/layui/videoInsert")
	public String videoInsert() {
		return "learningLayui/videoInsert";
	}
	
	@RequestMapping(value = "/manage/layui/videoUpdate")
	public String videoUpdate() {
		return "learningLayui/videoUpdate";
	}
	
	@RequestMapping(value = "/manage/layui/videoCheckLay")
	public String videoCheckLay() {
		return "learningLayui/videoCheckLay";
	}
	
	@RequestMapping(value = "/manage/layui/commInsert")
	public String commInsert() {
		return "learningLayui/commInsert";
	}
	
	@RequestMapping(value = "/manage/layui/commUpdate")
	public String commUpdate() {
		return "learningLayui/commUpdate";
	}
	
	@RequestMapping(value = "/manage/layui/commCheckLay")
	public String commCheckLay() {
		return "learningLayui/commCheckLay";
	}
}
