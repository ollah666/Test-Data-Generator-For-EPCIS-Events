exports.BusinessStep = function(callback){
	
	var businessStep		=	[
									{value:'BusinessStepEnter',							text:'User-Specific'},
									{value:'accepting', 								text:'Accepting'},
									{value:'arriving', 									text:'Arriving'},
									{value:'assembling', 								text:'Assembling'},
									{value:'collecting', 								text:'Collecting'},
									{value:'commissioning', 							text:'Commissioning'},
									{value:'consigning', 								text:'Consigning'},
									{value:'creating_class_instance', 					text:'Creating Class Instance'},
									{value:'cycle_counting', 							text:'Cycle Counting'},
									{value:'decommissioning', 							text:'Decommissioning'},
									{value:'departing', 								text:'Departing'},
									{value:'destroying', 								text:'Destroying'},
									{value:'disassembling',								text:'Disassembling'},
									{value:'dispensing', 								text:'Dispensing'},
									{value:'encoding',	 								text:'Encoding'},
									{value:'entering_exiting', 							text:'Entering Exiting'},
									{value:'holding', 									text:'Holding'},
									{value:'inspecting', 								text:'Inspecting'},
									{value:'installing', 								text:'Installing'},
									{value:'killing', 									text:'Killing'},
									{value:'loading', 									text:'Loading'},
									{value:'other', 									text:'Other'},
									{value:'packing', 									text:'Packing'},
									{value:'picking', 									text:'Picking'},
									{value:'receiving', 								text:'Receiving'},
									{value:'removing', 									text:'Removing'},
									{value:'repackaging', 								text:'Repackaging'},
									{value:'repairing', 								text:'Repairing'},
									{value:'replacing', 								text:'Replacing'},
									{value:'reserving', 								text:'Reserving'},
									{value:'retail_selling', 							text:'Retail Selling'},
									{value:'sampling',									text:'Sampling'},
									{value:'sensor_reporting',							text:'Sensor Reporting'},
									{value:'shipping', 									text:'Shipping'},
									{value:'staging_outbound',							text:'Staging Outbound'},
									{value:'stock_taking',								text:'Stock Taking'},
									{value:'stocking',									text:'Stocking'},
									{value:'storing',									text:'Storing'},
									{value:'transporting',								text:'Transporting'},
									{value:'unloading',									text:'Unloading'},
									{value:'unpacking',									text:'Unpacking'},
									{value:'void_shipping',								text:'Void Shipping'}								
								];
	
	var BusinessTransactions=	[
									{value:'bol',										text:'Bill of Lading'},
									{value:'cert',										text:'Certificate'},
									{value:'boldesadv',									text:'Despatch Advice'},
									{value:'inv',										text:'Invoice'},
									{value:'pedigree',									text:'Pedigree'},
									{value:'po',										text:'Purchase Order'},
									{value:'poc',										text:'Purchase Order Confirmation'},
									{value:'prodorder',									text:'Production Order'},
									{value:'recadv',									text:'Receiving Advice'},
									{value:'rma',										text:'Return Merchandise Authorisation'},
									{value:'testprd',									text:'Test Procedure'},
									{value:'testres',									text:'Test Results'},
									{value:'upevt',										text:'Upstream EPCIS Event'},									
								];
		
	var dispositions 		= 	[
									{value:'DispositionEnter',							text: 'Enter Manually'},
									{value:'active',									text: 'Active'},
									{value:'available',									text: 'Available'},
									{value:'completeness_verified',						text: 'Completeness Verified'},
									{value:'completeness_inferred',						text: 'Completeness Inferred'},
									{value:'conformant',								text: 'Conformant'},
									{value:'container_closed',							text: 'Container Closed'},
									{value:'container_open',							text: 'Container Open'},
									{value:'damaged',									text: 'Damaged'},
									{value:'destroyed',									text: 'Destroyed'},
									{value:'dispensed',									text: 'Dispensed'},
									{value:'disposed',									text: 'Disposed'},
									{value:'encoded',									text: 'Encoded'},
									{value:'expired',									text: 'Expired'},
									{value:'in_progress',								text: 'In Progress'},
									{value:'in_transit',								text: 'In Transit'},
									{value:'inactive',									text: 'Inactive'},
									{value:'mismatch_instance',							text: 'Mismatch Instance'},
									{value:'mismatch_class',							text: 'Mismatch Class'},
									{value:'mismatch_ quantity',						text: 'Mismatch Quantity'},
									{value:'needs_replacement',							text: 'Needs Replacement'},
									{value:'non_conformant',							text: 'Non Conformant'},
									{value:'non_sellable_other',						text: 'Non Sellable Other'},
									{value:'partially_dispensed',						text: 'Partially Dispensed'},
									{value:'recalled',									text: 'Recalled'},
									{value:'reserved',									text: 'Reserved'},
									{value:'retail_sold',								text: 'Retail Sold'},
									{value:'returned',									text: 'Returned'},
									{value:'sellable_accessible',						text: 'Sellable Accessible'},
									{value:'sellable_not_accessible',					text: 'Sellable Not Accessible'},
									{value:'stolen',									text: 'Stolen'},
									{value:'unavailable',								text: 'Uavailable'},
									{value:'unknown',									text: 'Unknown'}									
								];
		
	var eventType 			= 	[
									{value:'ObjectEvent', 								text:'Object Event'},
									{value:'AggregationEvent', 							text:'Aggregation Event'},
									{value:'TransactionEvent', 							text:'Transaction Event'},
									{value:'TransformationEvent', 						text:'Transformation Event'},
									{value:'AssociationEvent',							text:'Association Event'}
								];					
													
	var companyPrefixs		=	[					
									{value:'6', 										text:'6 Digits'},
									{value:'7', 										text:'7 Digits'},
									{value:'8', 										text:'8 Digits'},
									{value:'9', 										text:'9 Digits'},
									{value:'10', 										text:'10 Digits'},
									{value:'11', 										text:'11 Digits'},
									{value:'12', 										text:'12 Digits'},
								];
	
	var ObjectEventEpcsTypes=	[
									{value:'GS1 Key',									text:'GS1 Key', 				class:'bold',	disabled:true},
									{value:'SGTIN (Al 01 + Al 21)',						text:'SGTIN (Al 01 + Al 21)'},
									{value:'SSCC (Al 00)',								text:'SSCC (Al 00)'},
									{value:'GRAI (Al 8003)',							text:'GRAI (Al 8003)'},
									{value:'GIAI (Al 8004)',							text:'GIAI (Al 8004)'},
									{value:'GSRN (Al 8018)',							text:'GSRN (Al 8018)'},
									{value:'GSRNP (Al 8017)',							text:'GSRNP (Al 8017)'},
									{value:'GDTI (Al 253)',								text:'GDTI (Al 253)'},
									{value:'GCN (Al 255)',								text:'GCN (Al 255)'},
									{value:'CPI (Al 8010 8011)',						text:'CPI (Al 8010 + Al 8011)'},
									{value:'GINC (Al 401)',								text:'GINC (Al 401)'},
									{value:'GSIN (Al 402)',								text:'GSIN (Al 402)'},
									{value:'ITIP (Al 8006 + Al 21)',					text:'ITIP (Al 8006 + Al 21)'},
									{value:'UPI_UI (Al 01 + Al 235)',					text:'UPUI (Al 01 + Al 235)'},
									{value:'Other EPC Identifier',						text:'Other EPC Identifier',	class:'bold',	disabled:true},
									{value:'GID',										text:'GID'},
									{value:'USDoD',										text:'USDoD'},
									{value:'ADI',										text:'ADI'},
									{value:'BIC',										text:'BIC'},
									{value:'IMOVN',										text:'IMOVN'},
									{value:'Other',										text:'Other',					class:'bold',	disabled:true},
									{value:'Enter a URI Manually',						text:'Enter a URI Manually'}
								];
	
	var ObjectEventQuantities=	[
									{value:'GS1 Key',									text:'GS1 Key', 				class:'bold',	disabled:true},
									{value:'LGTIN (Al 01 + Al 10)', 					text:'LGTIN (Al 01 + Al 10)'},
									{value:'GTIN, no serial (Al 01)', 					text:'GTIN, no serial (Al 01)'},
									{value:'GRAI, no serial (Al 8003)',					text:'GRAI, no serial (Al 8003)'},
									{value:'GDTI, no serial (Al 253)', 					text:'GDTI, no serial (Al 253)'},
									{value:'GCN, no serial (Al 255)', 					text:'GCN, no serial (Al 255)'},
									{value:'CPI, no serial (Al 801 0)',					text:'CPI, no serial (Al 801 0)'},
									{value:'ITIP, no serial (Al 8006)',					text:'ITIP, no serial (Al 8006)'},
									{value:'UPUI, no TPX (Al 01)', 						text:'UPUI, no TPX (Al 01)'},
									{value:'Other',										text:'Other',					class:'bold',	disabled:true},
									{value:'Enter a URI Manually',						text:'Enter a URI Manually'}
								];
	
	var UOMs					=	[
									{value:'Mass',										text:'Mass', 				class:'bold',	disabled:true},
									{value:"KGM",										text:"Kilogram"},
									{value:"KTN",										text:"Kilotonne"},
									{value:"LTN",										text:"Ton (UK) or long ton (US)"},
									{value:"2U",										text:"Megagram"},
									{value:"TNE",										text:"Tonne (metric ton)"},
									{value:"STN",										text:"Ton (US) or short ton (UK/US)"},
									{value:"DTN",										text:"Decitonne"},
									{value:"STI",										text:"Stone (UK)"},
									{value:"LBR",										text:"Pound"},
									{value:"HGM",										text:"Hectogram"},
									{value:"ONZ",										text:"Ounce"},
									{value:"DJ",										text:"Decagram"},
									{value:"APZ",										text:"Troy ounce or apothecary ounce"},
									{value:"GRM",										text:"Gram"},
									{value:"DG",										text:"Decigram"},
									{value:"CGM",										text:"Centigram"},
									{value:"MGM",										text:"Milligram"},
									{value:"MC",										text:"Microgram"},
									{value:"F13",										text:"Slug"},
									{value:"CWI",										text:"Hundred weight (UK)"},
									{value:"CWA",										text:"Hundred pound (cwt) / hundred weight (US)"},
									{value:"M86",										text:"Pfund"},
									{value:"58",										text:"Net kilogram"},
									{value:"DRA",										text:"Dram (US)"},
									{value:"DRI",										text:"Dram (UK)"},
									{value:"E4",										text:"Gross kilogram"},
									{value:"GRN",										text:"Grain"},
									{value:"PN",										text:"Pound net"},
									{value:"DWT",										text:"Pennyweight"},
									{value:'Length',									text:'Length', 				class:'bold',	disabled:true},
									{value:"MTR",										text:"Metre"},
									{value:"A11",										text:"Angstrom"},
									{value:"A71",										text:"Femtometre"},
									{value:"C45",										text:"Nanometre"},
									{value:"4H",										text:"Micrometre"},
									{value:"A12",										text:"Astronomical unit"},
									{value:"DMT",										text:"Decimetre"},
									{value:"CMT",										text:"Centimetre"},
									{value:"MMT",										text:"Millimetre"},
									{value:"INH",										text:"Inch"},
									{value:"FOT",										text:"Foot"},
									{value:"YRD",										text:"Yard"},
									{value:"NMI",										text:"Nautical mile"},
									{value:"A45",										text:"Decametre"},
									{value:"HMT",										text:"Hectometre"},
									{value:"KMT",										text:"Kilometre"},
									{value:"B57",										text:"Light year"},
									{value:"AK",										text:"Fathom"},
									{value:"M50",										text:"Furlong"},
									{value:"M49",										text:"Chain (based on US survey foot)"},
									{value:"X1",										text:"Gunter's chain"},
									{value:"M51",										text:"Foot (US survey)"},
									{value:"HL",										text:"Hundred foot (linear)"},
									{value:"LF",										text:"Linear foot"},
									{value:"LK",										text:"Link"},
									{value:"LM",										text:"Linear metre"},
									{value:"SMI",										text:"Mile (statute mile)"},
									
								];
	
	
	var SensorElements		=	[
									{value:'User_Defined_Sensor',						text:'User defined sensor'},						
									{value:'Absorbed_dose',								text:'Absorbed dose'},
									{value:'Absorbed_dose_rate',						text:'Absorbed dose rate'},
									{value:'Acceleration',								text:'Acceleration'},
									{value:'Altitude_Elevation',						text:'Altitude/Elevation'},
									{value:'Amount_of_substance',						text:'Amount of substance'},
									{value:'Angle',										text:'Angle'},
									{value:'Angular_impulse',							text:'Angular impulse'},
									{value:'Angular_momentum',							text:'Angular momentum'},
									{value:'Area',										text:'Area'},
									{value:'Capacitance',								text:'Capacitance'},
									{value:'Charge',									text:'Charge'},
									{value:'Conductance',								text:'Conductance'},
									{value:'Conductivity',								text:'Conductivity'},
									{value:'Count',										text:'Count'},
									{value:'Current',									text:'Current'},
									{value:'Current desity',							text:'Current density'},
									{value:'Density',									text:'Density'},
									{value:'Dimensionless_concentration',				text:'Dimensionless concentration'},
									{value:'Dynamic_viscosity',							text:'Dynamic viscosity'},
									{value:'Effective_dose',							text:'Effective dose'},
									{value:'Effective_dose_rate',						text:'Effective dose rate'},
									{value:'Electric_field_intensity',					text:'Electric field intensity'},
									{value:'Energy',									text:'Energy'},
									{value:'Exposure',									text:'Exposure'},
									{value:'Force',										text:'Force'},
									{value:'Frequency',									text:'Frequency'},
									{value:'Humidity',									text:'Humidity'},
									{value:'Illuminance',								text:'Illuminance'},
									{value:'Impulse',									text:'Impulse/Linear momentum'},
									{value:'Inductance',								text:'Inductance'},
									{value:'Irradiance',								text:'Irradiance'},
									{value:'Kinematic_viscosity',						text:'Kinematic viscosity'},
									{value:'Latitude',									text:'Latitude'},
									{value:'Length',									text:'Length'},
									{value:'Longitude',									text:'Longitude'},
									{value:'Luminous_flux',								text:'Luminous flux'},
									{value:'Luminous_intensity', 						text:'Luminous intensity'},
									{value:'Magnetic_flux', 							text:'Magnetic flux'},
									{value:'Magnetic_flux_density',						text:'Magnetic flux density'},
									{value:'Magnetic_vector_potential',					text:'Magnetic vector potential'},
									{value:'Mass', 										text:'Mass'},
									{value:'Mass_flow_rate', 							text:'Mass flow rate'},
									{value:'Mass_flux',									text:'Mass flux'},
									{value:'Memory_capacity' ,							text:'Memory capacity'},
									{value:'Molar_concentration',						text:'Molar concentration'},
									{value:'Molar_mass', 								text:'Molar mass'},
									{value:'Molar_thermodynamic_energy', 				text:'Molar thermodynamic energy'},
									{value:'Molar_volume', 								text:'Molar volume'},
									{value:'Power', 									text:'Power'},
									{value:'Pressure',									text:'Pressure'},								
									{value:'Radiant_flux',								text:'Radiant flux'},
									{value:'Radiant_intensity',							text:'Radiant intensity'},
									{value:'Radiant_intensity',							text:'Radiant_intensity'},
									{value:'Resistance',								text:'Resistance'},
									{value:'Resistivity',								text:'Resistivity'},
									{value:'Specific_volume',							text:'Specific_volume'},
									{value:'Speed',										text:'Speed'},
									{value:'Velocity',									text:'Velocity'},
									{value:'Temperature',								text:'Temperature'},	
									{value:'Time',										text:'Time'},
									{value:'Torque',									text:'Torque'},
									{value:'Voltage',									text:'Voltage'},
									{value:'Volume',									text:'Volume'},
									{value:'Volumetric_flow_rate',						text:'Volumetric flow rate'},
									{value:'Volumetric_flux',							text:'Volumetric flux'}
								];
	
	var SensorValueTypes	=	[
									{value:'Discrete',									text:'Discrete'},
									{value:'Range',										text:'Range'},
									{value:'Boolean',									text:'Boolean'},
									{value:'User_Defined',								text:'User Defined'}
								];
								
	var SensorUOMs		=	[
									{value:'gray',										text:'Gray',										UOMtype:'Absorbed_dose'},
									{value:'gray per second',							text:'Gray per second',								UOMtype:'Absorbed_dose_rate'},
									{value:'meter per second',							text:'Meter per second',							UOMtype:'Acceleration'},
									{value:'per second',								text:'Per second',									UOMtype:'Acceleration'},
									{value:'metres',									text:'Metres',										UOMtype:'Altitude_Elevation'},
									{value:'mole',										text:'Mole',										UOMtype:'Amount_of_substance'},
									{value:'degree',									text:'Degree',										UOMtype:'Angle'},
									{value:'radians',									text:'radians',										UOMtype:'Angle'},
									{value:'newton metre second',						text:'Newton metre second',							UOMtype:'Angular_impulse'},
									{value:'kilogram metre squared',					text:'Kilogram metre squared',						UOMtype:'Angular_impulse'},
									{value:'per second',								text:'Per second',									UOMtype:'Angular_impulse'},
									{value:'newton metre second',						text:'Newton metre second',							UOMtype:'Angular_momentum'},
									{value:'kilogram metre squared',					text:'Kilogram metre squared',						UOMtype:'Angular_momentum'},
									{value:'per second',								text:'Per second',									UOMtype:'Angular_momentum'},									
									{value:'square metre',								text:'Square metre',								UOMtype:'Area'},
									{value:'farad',										text:'Farad',										UOMtype:'Capacitance'},
									{value:'coulomb',									text:'Coulomb',										UOMtype:'Charge'},
									{value:'siemen',									text:'Siemen',										UOMtype:'Conductance'},
									{value:'siemen per metre',							text:'Siemen per metre',										UOMtype:'Count'},
									{value:'ampere',									text:'Ampere',										UOMtype:'Current'},
									{value:'ampere per square metre',					text:'Ampere per square metre',						UOMtype:'Current density'},
									{value:'Kilogram per cubic metre',					text:'Kilogram per cubic metre',					UOMtype:'Density'},
									{value:'parts per million',							text:'Parts per million',							UOMtype:'Dimensionless_concentration'},
									{value:'pascal',									text:'Pascal',										UOMtype:'Dynamic_viscosity'},
									{value:'sievert',									text:'Sievert',										UOMtype:'Effective_dose'},
									{value:'sievert per second',						text:'Sievert per second',							UOMtype:'Effective_dose_rate'},
									{value:'volt per metre',							text:'Volt per metre',								UOMtype:'Electric_field_intensity'},
									{value:'joule',										text:'Joule',										UOMtype:'Energy'},
									{value:'lux second',								text:'Lux second',									UOMtype:'Exposure'},
									{value:'newton',									text:'Newton',										UOMtype:'Force'},
									{value:'hertz',										text:'Hertz',										UOMtype:'Frequency'},
									{value:"KMQ",										text:"Kilogram per cubic metre",					UOMtype:'Humidity'},
									{value:"23",										text:"Gram per cubic centimetre",					UOMtype:'Humidity'},
									{value:"D41",										text:"Tonne per cubic metre",						UOMtype:'Humidity'},
									{value:"GJ",										text:"Gram per millilitre",							UOMtype:'Humidity'},
									{value:"B35",										text:"Kilogram per litre",							UOMtype:'Humidity'},
									{value:"GL",										text:"Gram per litre",								UOMtype:'Humidity'},
									{value:"A93",										text:"Gram per cubic metre",						UOMtype:'Humidity'},
									{value:"GP",										text:"Milligram per cubic metre",					UOMtype:'Humidity'},
									{value:"B72",										text:"Megagram per cubic metre",					UOMtype:'Humidity'},
									{value:"B34",										text:"Kilogram per cubic decimetre",				UOMtype:'Humidity'},
									{value:"H29",										text:"Microgram per litre",							UOMtype:'Humidity'},
									{value:"M1",										text:"Milligram per litre",							UOMtype:'Humidity'},
									{value:"GQ",										text:"Microgram per cubic metre",					UOMtype:'Humidity'},
									{value:"F23",										text:"Gram per cubic decimetre",					UOMtype:'Humidity'},
									{value:"G31",										text:"Kilogram per cubic centimetre",				UOMtype:'Humidity'},
									{value:"87",										text:"Pound per cubic foot",						UOMtype:'Humidity'},
									{value:"GE",										text:"Pound per gallon (US)",						UOMtype:'Humidity'},
									{value:"LA",										text:"Pound per cubic inch",						UOMtype:'Humidity'},
									{value:"G32",										text:"Ounce per cubic yard",						UOMtype:'Humidity'},
									{value:"K41",										text:"Grain per gallon (US)",						UOMtype:'Humidity'},
									{value:"K71",										text:"Pound per gallon (UK)",						UOMtype:'Humidity'},
									{value:"K84",										text:"Pound per cubic yard",						UOMtype:'Humidity'},
									{value:"L37",										text:"Ounce per gallon (UK)",						UOMtype:'Humidity'},
									{value:"L38",										text:"Ounce per gallon (US)",						UOMtype:'Humidity'},
									{value:"L39",										text:"Ounce per cubic inch",						UOMtype:'Humidity'},
									{value:"L65",										text:"Slug per cubic foot",							UOMtype:'Humidity'},
									{value:"L92",										text:"Ton (UK long) per cubic yard",				UOMtype:'Humidity'},
									{value:"L93",										text:"Ton (US short) per cubic yard",				UOMtype:'Humidity'},									
									{value:"B60",										text:"lumen per square metre",						UOMtype:'Illuminance'},
									{value:"LUX",										text:"lux",											UOMtype:'Illuminance'},
									{value:"KLX",										text:"kilolux",										UOMtype:'Illuminance'},
									{value:"P25",										text:"lumen per square foot",						UOMtype:'Illuminance'},
									{value:"P26",										text:"phot",										UOMtype:'Illuminance'},
									{value:"P27",										text:"footcandle",									UOMtype:'Illuminance'},
									{value:'newton seconds',							text:'Newton seconds',								UOMtype:'Impulse'},
									{value:'henry',										text:'Henry',										UOMtype:'Inductance'},									
									{value:'watt per square metre',						text:'Watt per square metre',						UOMtype:'Irradiance'},
									{value:'square metres per second',					text:'Square metres per second',					UOMtype:'Kinematic_viscosity'},
									{value:'degrees',									text:'Degrees',										UOMtype:'Latitude'},
									{value:'metre',										text:'Metre',										UOMtype:'Length'},
									{value:'degrees',									text:'Degrees',										UOMtype:'Longitude'},
									{value:'lumen',										text:'Lumen',										UOMtype:'Luminous_flux'},
									{value:'candela',									text:'Candela',										UOMtype:'Luminous_intensity'},
									{value:'weber',										text:'Weber',										UOMtype:'Magnetic_flux'},
									{value:'tesla',										text:'Tesla',										UOMtype:'Magnetic_flux_density'},
									{value:'weber per metre',							text:'Weber per metre',								UOMtype:'Magnetic_vector_potential'},
									{value:'joules per ampere metre',					text:'Joules per ampere metre',						UOMtype:'Magnetic_vector_potential'},
									{value:'kilogram',									text:'Kilogram',									UOMtype:'Mass'},
									{value:'kilogram per second',						text:'Kilogram per second',							UOMtype:'Mass_flow_rate'},
									{value:'kilogram per second per square metre',		text:'Kilogram per second per square metre',		UOMtype:'Mass_flux'},
									{value:'byte',										text:'Byte',										UOMtype:'Memory_capacity'},
									{value:'mole per cubic metre',						text:'Mole per cubic metre',						UOMtype:'Molar_concentration'},
									{value:'kilogram per mole',							text:'Kilogram per mole',							UOMtype:'Molar_mass'},
									{value:'joule per mole',							text:'Joule per mole',								UOMtype:'Molar_thermodynamic_energy'},
									{value:'cubic metre per mole',						text:'Cubic metre per mole',						UOMtype:'Molar_volume'},
									{value:'watt',										text:'Watt',										UOMtype:'Power'},
									{value:"pascal",									text:"Pascal",										UOMtype:'Pressure'},
									{value:'Newton per square meter',					text:'Newton per square meter',						UOMtype:'Pressure'},
									{value:'watt',										text:'Watt',										UOMtype:'Radiant_flux'},
									{value:'watt',										text:'Watt',										UOMtype:'Radiant_intensity'},
									{value:'steradian',									text:'Steradian',									UOMtype:'Radiant_intensity'},
									{value:'becquerel',									text:'Becquerel',									UOMtype:'Radioactivity'},
									{value:'ohm',										text:'Ohm',											UOMtype:'becquerel'},
									{value:'ohm metre',									text:'Ohm metre',									UOMtype:'Resistivity'},
									{value:'cubic metres per kilogram',					text:'Cubic metres per kilogram',					UOMtype:'Specific_volume'},
									{value:'metre per second',							text:'Metre per second',							UOMtype:'Speed'},
									{value:'metre per second',							text:'Metre per second',							UOMtype:'Velocity'},
									{value:'KEL',										text:'Kelvin',										UOMtype:'Temperature'},
									{value:'FAH',										text:'Fahrenheit',									UOMtype:'Temperature'},
									{value:'CEL',										text:'Celsius',										UOMtype:'Temperature'},
									{value:'A48',										text:'Rankine',										UOMtype:'Temperature'},								
									{value:'second',									text:'Second',										UOMtype:'Time'},
									{value:'newton metre',								text:'Newton metre',								UOMtype:'Torque'},
									{value:'volt',										text:'Volt',										UOMtype:'Voltage'},
									{value:'cubic metre',								text:'Cubic metre',									UOMtype:'Volume'},
									{value:'cubic metre per second',					text:'Cubic metre per second',						UOMtype:'Volumetric_flow_rate'},
									{value:'cubic metre per second per square metre',	text:'Cubic metre per second per square metre',		UOMtype:'Volumetric_flux'}								
								];
	
	var SensorMetaDatas		=	[
									{value:'Time',										text:'Time'},
									{value:'Start Time',								text:'Start Time'},
									{value:'End Time',									text:'End Time'},
									{value:'Device ID',									text:'Device ID'},
									{value:'Device Metadata',							text:'Device Metadata'},
									{value:'Raw Data',									text:'Raw Data'},
									{value:'Data Processing Method',					text:'Data Processing Method'},
									{value:'Business Rules',							text:'Business Rules'}
								];	
									
	var SensorReportDatas	=	[	
									{value:'Device ID',									text:'Device ID'},
									{value:'Device MetaData',							text:'Device MetaData'},
									{value:'Raw Data',									text:'Raw Data'},
									{value:'Data Processing Method',					text:'Data Processing Method'},
									{value:'Time',										text:'Time'},
									{value:'Microorganism',								text:'Microorganism'},
									{value:'Chemical Substance',						text:'Chemical Substance'},
									{value:'Value',										text:'Value'},
									{value:'Component',									text:'Component'},
									{value:'String Value',								text:'String Value'},
									{value:'Boolean Value',								text:'Boolean Value'},
									{value:'Hex Binary Value',							text:'Hex Binary Value'},
									{value:'URI Value',									text:'URI Value'},
									{value:'Min Value',									text:'Min Value'},
									{value:'Max Value',									text:'Max Value'},
									{value:'Mean Value',								text:'Mean Value'},
									{value:'Standard Deviation',						text:'Standard Deviation'},
									{value:'Perc Rank',									text:'Perc Rank'},
									{value:'Perc Value',								text:'Perc Value'}
								];
	
	var TimeZones			=	[
									{value:'00:00',										text:'Greenwich Mean Time (GMT+00:00)'},
									{value:'00:00',										text:'Universal Coordinated Time (GMT+00:00)'},
									{value:'+01:00',									text:'European Central Time (GMT+01:00)'},
									{value:'+02:00',									text:'Eastern European Time (GMT+02:00)'},
									//{value:'+02:00',									text:'(Arabic) Egypt Standard Time (GMT+02:00)'},
									{value:'+03:00',									text:'Eastern African Time (GMT+03:00)'},
									{value:'+03:30',									text:'Middle East Time (GMT+03:30)'},
									{value:'+04:00',									text:'Near East Time (GMT+04:00)'},
									{value:'+05:00',									text:'Pakistan Lahore Time (GMT+5:00)'},
									{value:'+05:30',									text:'India Standard Time (GMT+5:30)'},
									{value:'+06:00',									text:'Bangladesh Standard Time (GMT+6:00)'},
									{value:'+07:00',									text:'Vietnam Standard Time (GMT+7:00)'},
									{value:'+08:00',									text:'China Taiwan Time (GMT+8:00)'},
									{value:'+09:00',									text:'Japan Standard Time (GMT+9:00)'},
									{value:'+09:30',									text:'Australia Central Time (GMT+9:30)'},
									{value:'+10:00',									text:'Australia Eastern Time (GMT+10:00)'},
									{value:'+11:00',									text:'Solomon Standard Time (GMT+11:00)'},
									{value:'+12:00',									text:'New Zealand Standard Time (GMT+12:00)'},
									{value:'-11:00',									text:'Midway Islands Time (GMT-11:00)'},
									{value:'-10:00',									text:'Hawaii Standard Time (GMT-10:00)'},
									{value:'-09:00',									text:'Alaska Standard Time (GMT-9:00)'},
									{value:'-08:00',									text:'Pacific Standard Time (GMT-8:00)'},
									{value:'-07:00',									text:'Phoenix Standard Time (GMT-7:00)'},
									{value:'-07:00',									text:'Mountain Standard Time (GMT-7:00)'},
									{value:'-06:00',									text:'Central Standard Time (GMT-6:00)'},
									{value:'-05:00',									text:'Eastern Standard Time (GMT-5:00)'},
									{value:'-05:00',									text:'Indiana Eastern Standard Time (GMT-5:00)'},
									{value:'-04:00',									text:'Puerto Rico and US Virgin Islands Time (GMT-4:00)'},
									{value:'-03:30',									text:'Canada Newfoundland Time (GMT-3:30)'},
									{value:'-03:00',									text:'Argentina Standard Time (GMT-3:00)'},
									{value:'-03:00',									text:'Brazil Eastern Time (GMT-3:00)'},
									{value:'-01:00',									text:'Central African Time (GMT-1:00)'}
								];
							

		var returnData 		= 	{
									'businessStep'			: 	businessStep, 
									'eventType'				:	eventType, 
									'dispositions'			:	dispositions, 
									'companyPrefixs'		:	companyPrefixs,
									'BusinessTransactions'	:	BusinessTransactions,
									'ObjectEventEpcsTypes'	:	ObjectEventEpcsTypes,
									'ObjectEventQuantities'	:	ObjectEventQuantities,
									'UOMs'					:	UOMs,
									'SensorElements'		:	SensorElements,
									'SensorUOMs'			:	SensorUOMs,
									'SensorValueTypes'		:	SensorValueTypes,
									'SensorMetaDatas'		:	SensorMetaDatas,
									'SensorReportDatas'		:	SensorReportDatas,
									'TimeZones'				:	TimeZones
								};
		
	callback(returnData);
}