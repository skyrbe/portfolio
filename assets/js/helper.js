/* battery level */

var chargingStateEl = document.getElementById('chargingState');
var chargingTimeEl = document.getElementById('chargingTime');
var dichargeTimeEl = document.getElementById('dischargeTime');
var levelEl = $('#battery-inner-js');
var batteryLevelEl = $('#battery-level-js');
function updateBatteryUI(battery) {
  levelEl.css({
    width: 'calc('+(battery.level * 100)+'% - 2px)'
  });
  $(batteryLevelEl).html((battery.level * 100)+'%');
  // levelEl.textContent = (battery.level * 100) + '%';
  // chargingTimeEl.textContent = battery.chargingTime + ' Seconds';
  // dichargeTimeEl.textContent = battery.dischargingTime + ' Seconds';
  //
  if (battery.charging === true) {
    levelEl.addClass('charging icon-thunder');
  } else if (battery.charging === false) {
    levelEl.removeClass('charging icon-thunder');
  }
}

function monitorBattery(battery) {
  // Update the initial UI.
  updateBatteryUI(battery);

  // Monitor for futher updates.
  battery.addEventListener('levelchange',
    updateBatteryUI.bind(null, battery));
  battery.addEventListener('chargingchange',
    updateBatteryUI.bind(null, battery));
  battery.addEventListener('dischargingtimechange',
    updateBatteryUI.bind(null, battery));
  battery.addEventListener('chargingtimechange',
    updateBatteryUI.bind(null, battery));
}

if ('getBattery' in navigator) {
  navigator.getBattery().then(monitorBattery);
} else {
  ChromeSamples.setStatus('The Battery Status API is not supported on ' +
    'this platform.');
}

/* clock */
function digi() {
  var date = new Date(),
      hour = date.getHours(),
      minute = checkTime(date.getMinutes()),
      ss = checkTime(date.getSeconds());

  function checkTime(i) {
    if( i < 10 ) {
      i = "0" + i;
    }
    return i;
  }

if ( hour > 12 ) {
  hour = hour - 12;
  if ( hour == 12 ) {
    hour = checkTime(hour);
  $("#time-js").html(hour+":"+minute+" AM");
  }
  else {
    hour = checkTime(hour);
    $("#time-js").html(hour+":"+minute+" PM");
  }
}
else {
  $("#time-js").html(hour+":"+minute+" AM");
}
  var time = setTimeout(digi,1000);
}
