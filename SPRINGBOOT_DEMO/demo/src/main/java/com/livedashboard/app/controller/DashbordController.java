package com.livedashboard.app.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.livedashboard.app.controller.service.LiveDasbhordService;
import com.livedashboard.app.dto.UserActivityDto;

@RestController
public class DashbordController {
	@Autowired
	private SimpMessagingTemplate webSocket;
	
	@Autowired
	private LiveDasbhordService liveDasbhordService;
    
	String topic="/topic/userdashboard";
	

	
	@PostMapping("/userdatav")
	public HashMap<String, List<UserActivityDto>> catchUserActivity(@RequestBody UserActivityDto userActivityDto) throws InterruptedException {
		
		
		System.out.println("-------------------------------");
		/*
		 * Process Data For DB BIG DATA OR influx time scale etc
		 * 
		 * 
		 * */
		
		HashMap<String, List<UserActivityDto>> responseDataFrame=liveDasbhordService.dataFormationForLiveDashboard(userActivityDto);
	    
		
		webSocket.convertAndSend(topic,responseDataFrame );
	    
		return responseDataFrame;
	}

}
