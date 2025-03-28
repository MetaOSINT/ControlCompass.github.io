  $(document).ready(function(){
	var arrayReturn = [];
	$.ajax({
		url: "cvc.json",
		async: true,
		dataType: 'json',
		success: function (data) {
			for (var i = 0, len = data.length; i < len; i++) {
				arrayReturn.push({'value' : data[i].technique,
				                  'techID' : data[i].techID,
				              	  'techName' : data[i].techName,
                              	  'tactics' : data[i].tactics,
                              	  'url' : data[i].url,
                              	  'splunk' : data[i].splunk,
                              	  'splunk_threatHunting' : data[i].splunk_threatHunting,
                              	  'elastic' : data[i].elastic,
                              	  'eql_analytics' : data[i].eql_analytics,
                              	  'azure_fullStack' : data[i].azure_fullStack,
                              	  'azure_sentinel' : data[i].azure_sentinel,
                              	  'proofpoint_emergingThreats' : data[i].proofpoint_emergingThreats,
                              	  'tanium_threatResponse' : data[i].tanium_threatResponse,
                              	  'aws' : data[i].aws,
                              	  'car' : data[i].car,
                              	  'atc' : data[i].atc,
                              	  'sigma' : data[i].sigma,
                              	  'th_playbook' : data[i].th_playbook,
                              	  'art' : data[i].art,
                              	  'rta' : data[i].rta,
                              	  'prelude' : data[i].prelude,
                              	  'stockpile' : data[i].stockpile,
							  	  'detect_volume' : data[i].detect_volume,
							  	  'test_volume' : data[i].test_volume,
							  	  'validate_potential' : data[i].validate_potential
							  	  });
			};
			loadSuggestions(arrayReturn);
			console.log(arrayReturn);
		}
	});
	function loadSuggestions(options) {
		$('#autocomplete').autocomplete({
			lookup: options,
			onSelect: function (suggestion) {
				$('#value').html('<h4 style="padding-top:5px"><a style="text-decoration:underline;color:#333333" target="_blank" href="' + suggestion.url + '"><strong>' + suggestion.value + '</strong></h4>');
				$('#tactics').html('<p><b>MITRE ATT&CK Tactic(s):</b> ' + suggestion.tactics + '</p>');
				if (suggestion.detect_volume == 0) {
					$('#detect_header').html('<h4 style="padding-top:20px"><b style="color:#1565c0">Volume of Detection Rules:</b><b> N/A</b></h4>');
					$('#detect_text').html('<p>There are no detection rules available for this attacker technique across 13 public resources included in this dataset.</p>');
				};
				if (suggestion.detect_volume == 1) {
					$('#detect_header').html('<h4 style="padding-top:20px"><b style="color:#1565c0">Volume of Detection Rules:</b><b> Low</b></h4>');
					$('#detect_text').html('<p>There are relatively few detection rules available for this attacker technique across 13 public resources included in this dataset.</p>');
				};
				if (suggestion.detect_volume == 2) {
					$('#detect_header').html('<h4 style="padding-top:20px"><b style="color:#1565c0">Volume of Detection Rules:</b><b> Medium</b></h4>');
					$('#detect_text').html('<p>There are some detection rules available for this attacker technique across 13 public resources included in this dataset.</p>');
				};
				if (suggestion.detect_volume == 3) {
					$('#detect_header').html('<h4 style="padding-top:20px"><b style="color:#1565c0">Volume of Detection Rules:</b><b> High</b></h4>');
					$('#detect_text').html('<p>There are relatively many detection rules available for this attacker technique across 13 public resources included in this dataset.</p>');
				};
				if (suggestion.splunk != null) {
					$('#splunk').html("<strong>" + suggestion.splunk + "</strong>" + " detection rule(s) are available from " + '<a style="text-decoration:underline" target="_blank" href="https://github.com/splunk/security_content"><strong>Splunk</strong></a>');
				};
				if (suggestion.splunk == null) {
					$('#splunk').html("");
				};
				if (suggestion.splunk_threatHunting != null) {
					$('#splunk_threatHunting').html("<strong>" + suggestion.splunk_threatHunting + "</strong>" + " detection rule(s) are available from the " + '<a style="text-decoration:underline" target="_blank" href="https://github.com/olafhartong/ThreatHunting/tree/master/attack_matrix"><strong>ThreatHunting Splunk app</strong></a>');
				};
				if (suggestion.splunk_threatHunting == null) {
					$('#splunk_threatHunting').html("");
				};
				if (suggestion.elastic != null) {
					$('#elastic').html("<strong>" + suggestion.elastic + "</strong>" + " detection rule(s) are available from " + '<a style="text-decoration:underline" target="_blank" href="https://github.com/elastic/detection-rules"><strong>Elastic Stack</strong></a>');
				};
				if (suggestion.elastic == null) {
					$('#elastic').html("");
				};
				if (suggestion.eql_analytics != null) {
					$('#eql_analytics').html("<strong>" + suggestion.eql_analytics + "</strong>" + " detection rule(s) are available from the " + '<a style="text-decoration:underline" target="_blank" href="https://eqllib.readthedocs.io/en/latest/analytics.html#"><strong>EQL Analytics Library</strong></a>');
				};
				if (suggestion.eql_analytics == null) {
					$('#eql_analytics').html("");
				};
				if (suggestion.azure_fullStack != null) {
					$('#azure_fullStack').html("<strong>" + suggestion.azure_fullStack + "</strong>" + " detection rule(s) are available from " + '<a style="text-decoration:underline" target="_blank" href="https://center-for-threat-informed-defense.github.io/security-stack-mappings/Azure/README.html"><strong>Azure full stack mappings</strong></a>');
				};
				if (suggestion.azure_fullStack == null) {
					$('#azure_fullStack').html("");
				};
				if (suggestion.azure_sentinel != null) {
					$('#azure_sentinel').html("<strong>" + suggestion.azure_sentinel + "</strong>" + " detection rule(s) are available from " + '<a style="text-decoration:underline" target="_blank" href="https://github.com/BlueTeamLabs/sentinel-attack/tree/master/detections"><strong>Sentinel detection mappings</strong></a>');
				};
				if (suggestion.azure_sentinel == null) {
					$('#azure_sentinel').html("");
				};
				if (suggestion.proofpoint_emergingThreats != null) {
					$('#proofpoint_emergingThreats').html("<strong>" + suggestion.proofpoint_emergingThreats + "</strong>" + " detection rule(s) are available from " + '<a style="text-decoration:underline" target="_blank" href="https://github.com/0xtf/nsm-attack"><strong>Network Security Monitoring rule mappings</strong></a>');
				};
				if (suggestion.proofpoint_emergingThreats == null) {
					$('#proofpoint_emergingThreats').html("");
				};
				if (suggestion.tanium_threatResponse != null) {
					$('#tanium_threatResponse').html("<strong>" + suggestion.tanium_threatResponse + "</strong>" + " detection rule(s) are available from " + '<a style="text-decoration:underline" target="_blank" href="https://content.tanium.com/files/misc/ThreatResponse/ThreatResponse.html"><strong>Tanium Threat Response</strong></a>');
				};
				if (suggestion.tanium_threatResponse == null) {
					$('#tanium_threatResponse').html("");
				};
				if (suggestion.aws != null) {
					$('#aws').html("<strong>" + suggestion.aws + "</strong>" + " detection rule(s) are available from " + '<a style="text-decoration:underline" target="_blank" href="https://center-for-threat-informed-defense.github.io/security-stack-mappings/AWS/README.html"><strong>AWS security control mappings</strong></a>');
				};
				if (suggestion.aws == null) {
					$('#aws').html("");
				};
				if (suggestion.car != null) {
					$('#car').html("<strong>" + suggestion.car + "</strong>" + " detection rule(s) are available from the " + '<a style="text-decoration:underline" target="_blank" href="https://github.com/mitre-attack/car/tree/master/analytics"><strong>Cyber Analytics Repository</strong></a>');
				};
				if (suggestion.car == null) {
					$('#car').html("");
				};
				if (suggestion.atc != null) {
					$('#atc').html("<strong>" + suggestion.atc + "</strong>" + " detection rule(s) are available from " + '<a style="text-decoration:underline" target="_blank" href="https://github.com/atc-project/atomic-threat-coverage/tree/master/Atomic_Threat_Coverage/Detection_Rules"><strong>Atomic Threat Coverage</strong></a>');
				};
				if (suggestion.atc == null) {
					$('#atc').html("");
				};
				if (suggestion.sigma != null) {
					$('#sigma').html("<strong>" + suggestion.sigma + "</strong>" + " detection rule(s) are available from the " + '<a style="text-decoration:underline" target="_blank" href="https://github.com/SigmaHQ/sigma/tree/master/rules"><strong>Sigma rules public repository</strong></a>');
				};
				if (suggestion.sigma == null) {
					$('#sigma').html("");
				};
				if (suggestion.th_playbook != null) {
					$('#th_playbook').html("<strong>" + suggestion.th_playbook + "</strong>" + " detection rule(s) are available from the " + '<a style="text-decoration:underline" target="_blank" href="https://github.com/OTRF/ThreatHunter-Playbook/tree/master/docs/notebooks/windows"><strong>ThreatHunter Playbook</strong></a>');
				};
				if (suggestion.th_playbook == null) {
					$('#th_playbook').html("");
				};
				if (suggestion.test_volume == 0) {
					$('#test_header').html('<h4 style="padding-top:20px"><b style="color:#bf2026ff">Volume of Offensive Tests:</b><b> N/A</b></h4>');
					$('#test_text').html('<p>There are no offensive security tests available for this attacker technique across 4 public resources included in this dataset.</p>');
				};
				if (suggestion.test_volume == 1) {
					$('#test_header').html('<h4 style="padding-top:20px"><b style="color:#bf2026ff">Volume of Offensive Tests:</b><b> Low</b></h4>');
					$('#test_text').html('<p>There are relatively few detection rules available for this attacker technique across 4 public resources included in this dataset.</p>');
				};
				if (suggestion.test_volume == 2) {
					$('#test_header').html('<h4 style="padding-top:20px"><b style="color:#bf2026ff">Volume of Offensive Tests:</b><b> Medium</b></h4>');
					$('#test_text').html('<p>There are some detection rules available for this attacker technique across 4 public resources included in this dataset.</p>');
				};
				if (suggestion.test_volume == 3) {
					$('#test_header').html('<h4 style="padding-top:20px"><b style="color:#bf2026ff">Volume of Offensive Tests:</b><b> High</b></h4>');
					$('#test_text').html('<p>There are relatively many detection rules available for this attacker technique across 4 public resources included in this dataset.</p>');
				};
				if (suggestion.art != null) {
					$('#art').html("<strong>" + suggestion.art + "</strong>" + " test(s) are available from " + '<a style="text-decoration:underline" target="_blank" href="https://github.com/redcanaryco/atomic-red-team/tree/master/atomics"><strong>Atomic Red Team</strong></a>');
				};
				if (suggestion.art == null) {
					$('#art').html("");
				};
				if (suggestion.rta != null) {
					$('#rta').html("<strong>" + suggestion.rta + "</strong>" + " test(s) are available from " + '<a style="text-decoration:underline" target="_blank" href="https://github.com/endgameinc/RTA/tree/master/red_ttp"><strong>Red Team Automation</strong></a>');
				};
				if (suggestion.rta == null) {
					$('#rta').html("");
				};
				if (suggestion.prelude != null) {
					$('#prelude').html("<strong>" + suggestion.prelude + "</strong>" + " test(s) are available from " + '<a style="text-decoration:underline" target="_blank" href="https://github.com/preludeorg/community/tree/master/ttps"><strong>Prelude Community TTPs</strong></a>');
				};
				if (suggestion.prelude == null) {
					$('#prelude').html("");
				};
				if (suggestion.stockpile != null) {
					$('#stockpile').html("<strong>" + suggestion.stockpile + "</strong>" + " test(s) are available from " + '<a style="text-decoration:underline" target="_blank" href="https://github.com/OTRF/ThreatHunter-Playbook/tree/master/docs/notebooks/windows"><strong>CALDERA Stockpile</strong></a>');
				};
				if (suggestion.stockpile == null) {
					$('#stockpile').html("");
				};
				if (suggestion.validate_potential == 0) {
					$('#validate_header').html('<h4 style="padding-top:20px"><b style="color:#7466BF">Validation Potential:</b><b> N/A</b></h4>');
					$('#validate_text1').html('<p>This represents a <i> purely conceptual</i> measure of the ability to validate the effectiveness of security controls (detections) aligned with this attacker technique. This is based entirely on the presence (or lack) of defensive detection rules and offensive tests in the 17 publicly-accessible resources included in this dataset.</p>');
				    $('#validate_text2').html('<p>For this technique, there are currently neither any detection rules nor any offensive tests available in the resources included in this dataset.</p>');
				};
				if (suggestion.validate_potential == 1) {
					$('#validate_header').html('<h4 style="padding-top:20px"><b style="color:#7466BF">Validation Potential:</b><b> Low</b></h4>');
					$('#validate_text1').html('<p>This represents a <i> purely conceptual</i> measure of the ability to validate the effectiveness of security controls (detections) aligned with this attacker technique. This is based entirely on the presence (or lack) of defensive detection rules and offensive tests in the 17 publicly-accessible resources included in this dataset.</p>');
					if (suggestion.detect_volume == 3 && suggestion.test_volume == 0) {
					    $('#validate_text2').html('<p>For this technique, there is a relatively high volume of defensive detection rules available in the resources included in this dataset. However, no offensive tests are currently available in these resources.</p>');
					};
					if (suggestion.detect_volume == 2 && suggestion.test_volume == 0) {
					    $('#validate_text2').html('<p>For this technique, there is a medium volume of defensive detection rules available in the resources included in this dataset. However, no offensive tests are currently available in these resources.</p>');
					};
					if (suggestion.detect_volume == 1 && suggestion.test_volume == 3) {
					    $('#validate_text2').html('<p>For this technique, there is a relatively high volume of offensive tests available in the resources included in this dataset. However, there is only a low volume of defensive detection rules currently available in these resources.</p>');
					};
					if (suggestion.detect_volume == 1 && suggestion.test_volume == 2) {
					    $('#validate_text2').html('<p>For this technique, there are some offensive tests available in the resources included in this dataset. However, there is only a low volume of defensive detection rules currently available in these resources.</p>');
					};
					if (suggestion.detect_volume == 1 && suggestion.test_volume == 1) {
					    $('#validate_text2').html('<p>For this technique, there is a relatively low volume of both defensive detection rules and offensive tests available in the resources included in this dataset.</p>');
					};
					if (suggestion.detect_volume == 1 && suggestion.test_volume == 0) {
					    $('#validate_text2').html('<p>For this technique, there is a relatively low volume of defensive detection rules and no offensive tests currently available in the resources included in this dataset.</p>');
					};
					if (suggestion.detect_volume == 0 && suggestion.test_volume == 1) {
					    $('#validate_text2').html('<p>For this technique, there are some offensive tests available in the resources included in this dataset. However, there are currently no defensive detection rules available in these resources.</p>');
					};
				};
				if (suggestion.validate_potential == 2) {
					$('#validate_header').html('<h4 style="padding-top:20px"><b style="color:#7466BF">Validation Potential:</b><b> Medium</b></h4>');
					$('#validate_text1').html('<p>This represents a <i> purely conceptual</i> measure of the ability to validate the effectiveness of security controls (detections) aligned with this attacker technique. This is based entirely on the presence (or lack) of defensive detection rules and offensive tests in the 17 publicly-accessible resources included in this dataset.</p>');
					if (suggestion.detect_volume == 3 && suggestion.test_volume == 1) {
					    $('#validate_text2').html('<p>For this technique, there is a relatively high volume of defensive detection rules; however, there are relatively few offensive tests available in the resources included in this dataset.</p>');
					};
					if (suggestion.detect_volume == 2 && suggestion.test_volume == 2) {
					    $('#validate_text2').html('<p>For this technique, there is a medium volume of both defensive detection rules and offensive tests available in the resources included in this dataset.</p>');
					};
					if (suggestion.detect_volume == 2 && suggestion.test_volume == 1) {
					    $('#validate_text2').html('<p>For this technique, there is a medium volume of both defensive detection rules and some offensive tests available in the resources included in this dataset.</p>');
					};
				};
				if (suggestion.validate_potential == 3) {
					$('#validate_header').html('<h4 style="padding-top:20px"><b style="color:#7466BF">Validation Potential:</b><b> High</b></h4>');
					$('#validate_text1').html('<p>This represents a <i> purely conceptual</i> measure of the ability to validate the effectiveness of security controls (detections) aligned with this attacker technique. This is based entirely on the presence (or lack) of defensive detection rules and offensive tests in the 17 publicly-accessible resources included in this dataset.</p>');
					if (suggestion.detect_volume == 3 && suggestion.test_volume == 3) {
					    $('#validate_text2').html('<p>For this technique, there is a relatively high volume of both defensive detection rules and offensive tests available in the resources included in this dataset.</p>');
					};
					if (suggestion.detect_volume == 2 && suggestion.test_volume == 3) {
					    $('#validate_text2').html('<p>For this technique, there is a relatively high volume of offensive tests and a medium volume of defensive detection rules available in the resources included in this dataset.</p>');
					};
					if (suggestion.detect_volume == 3 && suggestion.test_volume == 2) {
					    $('#validate_text2').html('<p>For this technique, there is a relatively high volume of defensive detection rules and a medium volume of offensive tests available in the resources included in this dataset.</p>');
					};
				};
			}
		});
	}
  })
