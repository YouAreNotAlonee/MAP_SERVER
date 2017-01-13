
// 마커 시작
// var markerPosition  = new daum.maps.LatLng(37.61921, 127.05828);

var markerPosition = map.getCenter();
// 마커를 생성합니다
var marker = new daum.maps.Marker({
    position: markerPosition
});

marker.setDraggable(true); // 드래그 가능하도록 설정
marker.setMap(map);
// 마커 끝

daum.maps.event.addListener(marker, 'dragstart', function() {
    var mPos = marker.getPosition();
    // marker.setPosition(new daum.maps.LatLng(37.61775472842967,127.05642998163928));

    marker.setPosition(new daum.maps.LatLng(mPos));


    var message = '<p>마커 좌표</p>';
    message += '<p>위도, 경도: ' +mPos+'</p>';


    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = message;


});



