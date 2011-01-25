// List of stock symbols for various indices
var indices = {
	DJI: {
		symbols: ['AA','AXP','BA','BAC','CAT','CSCO','CVX','DD','DIS','GE','HD','HPQ','IBM','INTC','JNJ','JPM','KFT','KO','MCD','MMM','MRK','MSFT','PFE','PG','T','TRV','UTX','VZ','WMT','XOM'],
		selectOptionTip: 'New York ~ Dow Jones Industrials'
	},
	DJA: {
		symbols: ['AA','AEP','AES','ALEX','AMR','AXP','BA','BAC','CAT','CHRW','CNP','CNW','CSCO','CSX','CVX','D','DAL','DD','DIS','DUK','ED','EIX','EXC','EXPD','FDX','FE','GE','GMT','HD','HPQ','IBM','INTC','JBHT','JBLU','JNJ','JPM','KFT','KO','KSU','LSTR','LUV','MCD','MMM','MRK','MSFT','NEE','NI','NSC','OSG','PCG','PEG','PFE','PG','R','SO','T','TRV','UNP','UPS','UTX','VZ','WMB','WMT','XOM'],
		selectOptionTip: 'New York ~ Dow Jones Composite Average'
	},
	DJT: {
		symbols: ['ALEX','AMR','CHRW','CNW','CSX','DAL','EXPD','FDX','GMT','JBHT','JBLU','KSU','LSTR','LUV','NSC','OSG','R','UNP','UPS'],
		selectOptionTip: 'New York ~ Dow Jones Transport'
	},
	DJU: {
		symbols: ['AEP','AES','CNP','D','DUK','ED','EIX','EXC','FE','NEE','NI','PCG','PEG','SO','WMB'],
		selectOptionTip: 'New York ~ Dow Jones Utilities'
	},
	'S&P500 A to E': {
		symbols: ['A','AA','AAPL','ABC','ABT','ACE','ADBE','ADI','ADM','ADP','ADSK','AEE','AEP','AES','AET','AFL','AGN','AIG','AIV','AIZ','AKAM','AKS','ALL','ALTR','AMAT','AMD','AMGN','AMP','AMT','AMZN','AN','ANF','AON','APA','APC','APD','APH','APOL','ARG','ATI','AVB','AVP','AVY','AXP','AYE','AZO','BA','BAC','BAX','BBBY','BBT','BBY','BCR','BDX','BEN','BF-B','BHI','BIG','BIIB','BK','BLL','BMC','BMS','BMY','BRCM','BRK-B','BSX','BTU','BXP','C','CA','CAG','CAH','CAM','CAT','CB','CBG','CBS','CCE','CCL','CEG','CELG','CEPH','CERN','CF','CFN','CHK','CHRW','CI','CINF','CL','CLF','CLX','CMA','CMCSA','CME','CMI','CMS','CNP','CNX','COF','COG','COH','COL','COP','COST','CPB','CPWR','CRM','CSC','CSCO','CSX','CTAS','CTL','CTSH','CTXS','CVH','CVS','CVX','D','DD','DE','DELL','DF','DFS','DGX','DHI','DHR','DIS','DISCA','DNB','DNR','DO','DOV','DOW','DPS','DRI','DTE','DTV','DUK','DV','DVA','DVN','EBAY','ECL','ED','EFX','EIX','EK','EL','EMC','EMN','EMR','EOG','EP','EQR','EQT','ERTS','ESRX','ETFC','ETN','ETR','EXC','EXPD','EXPE'],
		selectOptionTip: 'New York ~ Standard & Poor 500'
	},
	'S&P500 F to O': {
		symbols: ['F','FAST','FCX','FDO','FDX','FE','FHN','FII','FIS','FISV','FITB','FLIR','FLR','FLS','FMC','FO','FRX','FSLR','FTI','FTR','GAS','GCI','GD','GE','GENZ','GILD','GIS','GLW','GME','GNW','GOOG','GPC','GPS','GR','GS','GT','GWW','HAL','HAR','HAS','HBAN','HCBK','HCN','HCP','HD','HES','HIG','HNZ','HOG','HON','HOT','HP','HPQ','HRB','HRL','HRS','HSP','HST','HSY','HUM','IBM','ICE','IFF','IGT','INTC','INTU','IP','IPG','IRM','ISRG','ITT','ITW','IVZ','JBL','JCI','JCP','JDSU','JEC','JNJ','JNPR','JNS','JPM','JWN','K','KEY','KFT','KG','KIM','KLAC','KMB','KMX','KO','KR','KSS','L','LEG','LEN','LH','LIFE','LLL','LLTC','LLY','LM','LMT','LNC','LO','LOW','LSI','LTD','LUK','LUV','LXK','M','MA','MAR','MAS','MAT','MCD','MCHP','MCK','MCO','MDP','MDT','MEE','MET','MFE','MHP','MHS','MI','MJN','MKC','MMC','MMM','MO','MOLX','MON','MOT','MRK','MRO','MS','MSFT','MTB','MU','MUR','MWV','MWW','MYL','NBL','NBR','NDAQ','NEE','NEM','NI','NKE','NOC','NOV','NOVL','NRG','NSC','NSM','NTAP','NTRS','NU','NUE','NVDA','NVLS','NWL','NWSA','NYT','NYX','ODP','OI','OKE','OMC','ORCL','ORLY','OXY'],
		selectOptionTip: 'New York ~ Standard & Poor 500'
	},
	'S&P500 P to Z': {
		symbols: ['PAYX','PBCT','PBI','PCAR','PCG','PCL','PCLN','PCP','PCS','PDCO','PEG','PEP','PFE','PFG','PG','PGN','PGR','PH','PHM','PKI','PLD','PLL','PM','PNC','PNW','POM','PPG','PPL','PRU','PSA','PTV','PWR','PX','PXD','Q','QCOM','QEP','QLGC','R','RAI','RDC','RF','RHI','RHT','RL','ROK','ROP','ROST','RRC','RRD','RSG','RSH','RTN','S','SAI','SBUX','SCG','SCHW','SE','SEE','SHLD','SHW','SIAL','SJM','SLB','SLE','SLM','SNA','SNDK','SNI','SO','SPG','SPLS','SRCL','SRE','STI','STJ','STT','STZ','SUN','SVU','SWK','SWN','SWY','SYK','SYMC','SYY','T','TAP','TDC','TE','TEG','TER','TGT','THC','TIE','TIF','TJX','TLAB','TMK','TMO','TROW','TRV','TSN','TSO','TSS','TWC','TWX','TXN','TXT','TYC','UNH','UNM','UNP','UPS','URBN','USB','UTX','V','VAR','VFC','VIA-B','VLO','VMC','VNO','VRSN','VTR','VZ','WAG','WAT','WDC','WEC','WFC','WFMI','WFR','WHR','WIN','WLP','WM','WMB','WMT','WPI','WPO','WU','WY','WYN','WYNN','X','XEL','XL','XLNX','XOM','XRAY','XRX','YHOO','YUM','ZION','ZMH'],
		selectOptionTip: 'New York ~ Standard & Poor 500'
	},
	'S&P500 All': {
		symbols: ['A','AA','AAPL','ABC','ABT','ACE','ADBE','ADI','ADM','ADP','ADSK','AEE','AEP','AES','AET','AFL','AGN','AIG','AIV','AIZ','AKAM','AKS','ALL','ALTR','AMAT','AMD','AMGN','AMP','AMT','AMZN','AN','ANF','AON','APA','APC','APD','APH','APOL','ARG','ATI','AVB','AVP','AVY','AXP','AYE','AZO','BA','BAC','BAX','BBBY','BBT','BBY','BCR','BDX','BEN','BF-B','BHI','BIG','BIIB','BK','BLL','BMC','BMS','BMY','BRCM','BRK-B','BSX','BTU','BXP','C','CA','CAG','CAH','CAM','CAT','CB','CBG','CBS','CCE','CCL','CEG','CELG','CEPH','CERN','CF','CFN','CHK','CHRW','CI','CINF','CL','CLF','CLX','CMA','CMCSA','CME','CMI','CMS','CNP','CNX','COF','COG','COH','COL','COP','COST','CPB','CPWR','CRM','CSC','CSCO','CSX','CTAS','CTL','CTSH','CTXS','CVH','CVS','CVX','D','DD','DE','DELL','DF','DFS','DGX','DHI','DHR','DIS','DISCA','DNB','DNR','DO','DOV','DOW','DPS','DRI','DTE','DTV','DUK','DV','DVA','DVN','EBAY','ECL','ED','EFX','EIX','EK','EL','EMC','EMN','EMR','EOG','EP','EQR','EQT','ERTS','ESRX','ETFC','ETN','ETR','EXC','EXPD','EXPE','F','FAST','FCX','FDO','FDX','FE','FHN','FII','FIS','FISV','FITB','FLIR','FLR','FLS','FMC','FO','FRX','FSLR','FTI','FTR','GAS','GCI','GD','GE','GENZ','GILD','GIS','GLW','GME','GNW','GOOG','GPC','GPS','GR','GS','GT','GWW','HAL','HAR','HAS','HBAN','HCBK','HCN','HCP','HD','HES','HIG','HNZ','HOG','HON','HOT','HP','HPQ','HRB','HRL','HRS','HSP','HST','HSY','HUM','IBM','ICE','IFF','IGT','INTC','INTU','IP','IPG','IRM','ISRG','ITT','ITW','IVZ','JBL','JCI','JCP','JDSU','JEC','JNJ','JNPR','JNS','JPM','JWN','K','KEY','KFT','KG','KIM','KLAC','KMB','KMX','KO','KR','KSS','L','LEG','LEN','LH','LIFE','LLL','LLTC','LLY','LM','LMT','LNC','LO','LOW','LSI','LTD','LUK','LUV','LXK','M','MA','MAR','MAS','MAT','MCD','MCHP','MCK','MCO','MDP','MDT','MEE','MET','MFE','MHP','MHS','MI','MJN','MKC','MMC','MMM','MO','MOLX','MON','MOT','MRK','MRO','MS','MSFT','MTB','MU','MUR','MWV','MWW','MYL','NBL','NBR','NDAQ','NEE','NEM','NI','NKE','NOC','NOV','NOVL','NRG','NSC','NSM','NTAP','NTRS','NU','NUE','NVDA','NVLS','NWL','NWSA','NYT','NYX','ODP','OI','OKE','OMC','ORCL','ORLY','OXY','PAYX','PBCT','PBI','PCAR','PCG','PCL','PCLN','PCP','PCS','PDCO','PEG','PEP','PFE','PFG','PG','PGN','PGR','PH','PHM','PKI','PLD','PLL','PM','PNC','PNW','POM','PPG','PPL','PRU','PSA','PTV','PWR','PX','PXD','Q','QCOM','QEP','QLGC','R','RAI','RDC','RF','RHI','RHT','RL','ROK','ROP','ROST','RRC','RRD','RSG','RSH','RTN','S','SAI','SBUX','SCG','SCHW','SE','SEE','SHLD','SHW','SIAL','SJM','SLB','SLE','SLM','SNA','SNDK','SNI','SO','SPG','SPLS','SRCL','SRE','STI','STJ','STT','STZ','SUN','SVU','SWK','SWN','SWY','SYK','SYMC','SYY','T','TAP','TDC','TE','TEG','TER','TGT','THC','TIE','TIF','TJX','TLAB','TMK','TMO','TROW','TRV','TSN','TSO','TSS','TWC','TWX','TXN','TXT','TYC','UNH','UNM','UNP','UPS','URBN','USB','UTX','V','VAR','VFC','VIA-B','VLO','VMC','VNO','VRSN','VTR','VZ','WAG','WAT','WDC','WEC','WFC','WFMI','WFR','WHR','WIN','WLP','WM','WMB','WMT','WPI','WPO','WU','WY','WYN','WYNN','X','XEL','XL','XLNX','XOM','XRAY','XRX','YHOO','YUM','ZION','ZMH'],
		selectOptionTip: 'New York ~ Standard & Poor 500'
	},
	'S&P1500 1-200': {
		symbols: ['A','AA','AAI','AAN','AAON','AAP','AAPL','ABAX','ABC','ABFS','ABM','ABT','ACAT','ACI','ACIW','ACM','ACO','ACTL','ACV','ACXM','ADBE','ADCT','ADI','ADM','ADP','ADS','ADSK','ADTN','ADVS','AEE','AEIS','AEO','AEP','AES','AET','AF','AFAM','AFFX','AFG','AFL','AGCO','AGL','AGN','AGP','AGYS','AHS','AIG','AIN','AINV','AIR','AIRM','AIT','AIV','AIZ','AJG','AKAM','AKR','AKS','ALB','ALE','ALEX','ALGN','ALGT','ALK','ALL','ALOG','ALTR','AM','AMAT','AMB','AMD','AME','AMED','AMG','AMGN','AMMD','AMP','AMSF','AMSG','AMT','AMZN','AN','ANDE','ANF','ANN','ANSS','AOI','AOL','AON','AOS','APA','APC','APD','APEI','APH','APOG','APOL','APSG','ARB','ARE','ARG','ARJ','ARO','ARQL','ARRS','ARW','ASBC','ASEI','ASF','ASGN','ASH','ASTE','ATI','ATK','ATMI','ATML','ATO','ATR','ATU','ATW','AVA','AVAV','AVB','AVD','AVID','AVP','AVT','AVY','AWR','AXE','AXP','AYE','AYI','AZO','AZZ','B','BA','BABY','BAC','BAS','BAX','BBBY','BBG','BBOX','BBT','BBY','BC','BCO','BCPC','BCR','BCSI','BDC','BDX','BEAV','BEC','BELFB','BEN','BEZ','BF-B','BGFV','BGG','BHE','BHI','BID','BIG','BIIB','BIO','BJ','BJRI','BK','BKE','BKH','BKI','BKMU','BKS','BLKB','BLL','BLUD','BMC','BMI','BMR','BMS','BMY','BNE','BOBE','BOH','BPFH','BR','BRC','BRCM','BRE','BRKL','BRKS','BRLI','BRO','BRS','BSX','BTH','BTU','BUCY','BW','BWA','BWLD','BWS','BXP','BXS','BYD','C','CA','CAB','CACI','CAG','CAH','CAKE','CALM','CAM','CAS','CASC','CASY','CAT','CATO','CATY','CB','CBB','CBEY','CBG','CBK','CBM','CBR','CBRL','CBS','CBSH','CBST','CBT','CBU','CCC','CCE','CCL','CCMP','CCRN','CDI','CDNS'],
		selectOptionTip: 'New York ~ Standard & Poor 1,500'
	},
	FTSE100: {
		symbols: ['AAL.L','ABF.L','ABG.L','ADM.L','AGK.L','AMEC.L','ANTO.L','ARM.L','ATST.L','AU.L','AV.L','AZN.L','BA.L','BARC.L','BATS.L','BAY.L','BG.L','BLND.L','BLT.L','BNZL.L','BP.L','BRBY.L','BSY.L','BT-A.L','CCL.L','CNA.L','CNE.L','COB.L','CPG.L','CPI.L','CSCG.L','CW.L','DGE.L','EMG.L','ENRC.L','ESSR.L','EXPN.L','FRES.L','GFS.L','GSK.L','HMSO.L','HOME.L','HSBA.L','IAP.L','IHG.L','III.L','IMT.L','INVP.L','IPR.L','ISAT.L','ISYS.L','ITRK.L','JMAT.L','KAZ.L','KGF.L','LAND.L','LGEN.L','LLOY.L','LMI.L','MKS.L','MRW.L','NG.L','NXT.L','OML.L','PFC.L','PRU.L','PSON.L','RB.L','RBS.L','RDSA.L','RDSB.L','REL.L','REX.L','RIO.L','RR.L','RRS.L','RSA.L','SAB.L','SBRY.L','SDR.L','SDRC.L','SGE.L','SGRO.L','SHP.L','SL.L','SMIN.L','SN.L','SRP.L','SSE.L','STAN.L','SVT.L','TLW.L','TSCO.L','TT.L','ULVR.L','UU.L','VED.L','VOD.L','WOS.L','WPP.L','WTB.L','XTA.L'],
		selectOptionTip: 'London ~ Financial Times / London Stock Exchange'
	},
	CAC40: {
		symbols: ['ACA.PA','AI.PA','ALO.PA','ALU.PA','BN.PA','BNP.PA','CA.PA','CAP.PA','CS.PA','DEXB.BR','DG.PA','EDF.PA','EI.PA','EN.PA','FP.PA','FTE.PA','GLE.PA','GSZ.PA','LG.PA','MC.PA','ML.PA','MMB.PA','OR.PA','PP.PA','RI.PA','RNO.PA','SAN.PA','SEV.PA','SGO.PA','SU.PA','TEC.PA','UG.PA','UL.PA','VIE.PA','VIV.PA','VK.PA'],
			selectOptionTip: 'Paris ~ CAC 40'
	},
	NZSX50: {
		symbols: ['ABA.NZ','AIA.NZ','AIR.NZ','AMP.AX','ANZ.AX','APT.NZ','CAV.NZ','CEN.NZ','EBO.NZ','FBU.NZ','FPA.NZ','FPH.NZ','FRE.NZ','GMT.NZ','HLG.NZ','IFT.NZ','IMP.NZ','ING.NZ','KIP.NZ','KMD.NZ','MFT.NZ','MHI.NZ','NPX.NZ','NZO.NZ','NZR.NZ','NZS.NZ','NZX.NZ','PFI.NZ','PGW.NZ','POT.NZ','PPL.NZ','PRC.NZ','RAK.NZ','RBD.NZ','RYM.NZ','SAN.NZ','SKC.NZ','SKT.NZ','STU.NZ','TEL.NZ','TLS.AX','TPW.NZ','TWR.NZ','VCT.NZ','WBC.AX','WHS.NZ'],
		selectOptionTip: 'Auckland ~ New Zealand Exchange'
	},
	HSI: {
		symbols: ['0001.HK','0002.HK','0003.HK','0004.HK','0005.HK','0006.HK','0011.HK','0012.HK','0013.HK','0016.HK','0017.HK','0019.HK','0023.HK','0066.HK','0083.HK','0101.HK','0144.HK','0267.HK','0291.HK','0293.HK','0330.HK','0386.HK','0388.HK','0494.HK','0688.HK','0700.HK','0762.HK','0836.HK','0857.HK','0883.HK','0939.HK','0941.HK','1088.HK','1109.HK','1199.HK','1398.HK','1880.HK','1898.HK','2038.HK','2318.HK','2388.HK','2600.HK','2628.HK','3328.HK','3988.HK'],
		selectOptionTip: 'Hong Kong ~ Hang Seng Index'
	},
	STI: {
		symbols: ['BN4.SI','C07.SI','C09.SI','C31.SI','C38U.SI','C52.SI','C6L.SI','CC3.SI','D05.SI','E5H.SI','F34.SI','F99.SI','G13.SI','JS8.SI','N03.SI','N21.SI','O32.SI','O39.SI','S51.SI','S53.SI','S59.SI','S63.SI','S68.SI','T39.SI','U11.SI','U96.SI','Z74.SI'],
		selectOptionTip: 'Singapore ~ Straits Times Index'
	},
	BSE: {
		symbols: ['ACC.BO','BHEL.BO','BRTI.BO','CIPL.BO','DLF.BO','HDBK.BO','HROH.BO','HALC.BO','HLL.BO','HDFC.BO','ICBK.BO','INFY.BO','ITC.BO','JAIA.BO','JNSP.BO','LART.BO','MAHM.BO','MRTI.BO','NTPC.BO','ONGC.BO','RLCM.BO','RELI.BO','RLIN.BO','SBI.BO','STRL.BO','TCS.BO','TAMO.BO','TTPW.BO','TISC.BO','WIPR.BO'],
		selectOptionTip: 'Bombay ~ Bombay Stock Exchange Sensitivity Index'
	}
}

var dataItems = new Array();
setups = {
	'Change from Close': {
		selectOptionTip: 'Since yesterday\'s close',
		xAxisTitle: 'Price Change Since Yesterday\'s Close ~ Percentage',
		processData: function(index, item, rad) {
			return {x: 100 * item.change/item.price, y: 100 * item.volume/item.avgvolume, marker: {radius: rad}}
		}
	},
	'Change from Open': {
		selectOptionTip: 'Since this morning\'s opening',
		xAxisTitle: 'Price Change since Open ~ Percentage',
		processData: function(index, item, rad) {
			return {x: 100 * (item.price - item.open)/ item.price, y: 100 * item.volume / item.avgvolume, marker:  {radius: rad}}

		}
	},
	'Day\'s Range': {
		selectOptionTip: 'Since this morning\'s opening',
		xAxisTitle: 'Day\'s Range (High - Low) Over Price ~ Percentage',
		processData: function(index, item, rad) {
			var str = item.range;
			str = str.slice(1,str.length-2);
			var arr = str.split(' - ');
			var v1 = parseFloat(arr[0]);
			if (isNaN(v1)) {arr[0] = item.open;}
			v1 = parseFloat(arr[1]);
			if (isNaN(v1)) {arr[1] = item.price;}
			return {x: 100 * (parseFloat(arr[1]) - parseFloat(arr[0]))/ item.price, y: 100 * item.volume / item.avgvolume, marker: {radius: rad}}
		}
	},
	'With Trails - Change from Open': {
		selectOptionTip: 'Since this morning\'s opening with previous movements',
		xAxisTitle: 'Price Change since Open ~ Percentage',
		processData: function(index, item, rad) {
			dataItems[index].push(item);
			var it = dataItems[index][0]; // console.log("change: ", it.change); // remember to rem
			return [{x: 100 * (it.price - it.open)/it.price, y: 100 * it.volume/it.avgvolume, marker: {radius: 1}},
				{x: 100 * (item.price - item.open)/item.price, y: 100 * item.volume/item.avgvolume, marker: {radius: rad}}
			];

		}
	}
}

/**
 * Predefined themes
 */
var standard = {
	colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
	chart: {
		backgroundColor: {
			linearGradient: [0, 0, 500, 500],
			stops: [
				[0, 'rgb(255, 255, 255)'],
				[1, 'rgb(240, 240, 255)']
			]
		},
		borderColor: null,
		plotBackgroundColor: null,
		plotBackgroundImage: null,
		plotBackgroundColor: 'rgba(255, 255, 255, .9)',
		plotBorderWidth: 1,
		plotShadow: true
	},

	title: {
		style: {
			color: '#000',
			font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
		}
	},
	plotOptions: {
		scatter: {
			dataLabels: {
				style: {
					fontSize: '14px',
					fontWeight:'bold'
				},
				y: -18,
				formatter: function() {
					var len = dataItems[this.series.index].length;
					if (len == 0) {
						return this.series.name;
					} else {
						var itm = dataItems[this.series.index][0];
						if (!itm.inc) {itm.inc = 0;}  // console.log(this.series.name, dataItems[this.series.index][0].inc, len);
						if (itm.inc == len) {
							itm.inc = len;
							return this.series.name;
						}
						itm.inc++;
					}
				}
			}
		}
	},
	subtitle: {
		style: {
			color: '#666',
			font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
		}
	},
	toolbar: {
        itemStyle: {
            color:'#F00',
			fontSize: '28px',
			fontWeight: 'bold'
        }
    },
	xAxis: {
		gridLineWidth: 1,
		lineColor: '#000',
		tickColor: '#000',
		labels: {
			style: {
				color: '#000',
				font: '11px Trebuchet MS, Verdana, sans-serif'
			}
		},
		title: {
			style: {
				color: '#333',
				fontWeight: 'bold',
				fontSize: '12px',
				fontFamily: 'Trebuchet MS, Verdana, sans-serif'
			}
		}
	},
	yAxis: {
		alternateGridColor: null,
		minorTickInterval: null,
		lineColor: '#000',
		lineWidth: 1,
		tickWidth: 1,
		tickColor: '#000',
		labels: {
			style: {
				color: '#000',
				font: '11px Trebuchet MS, Verdana, sans-serif'
			}
		},
		title: {
			style: {
				color: '#333',
				fontWeight: 'bold',
				fontSize: '12px',
				fontFamily: 'Trebuchet MS, Verdana, sans-serif'
			}
		}
	},
	legend: {
		// enabled: true,
		layout: 'horizontal',
		align: 'right',
		verticalAlign: 'top',
		x: -30,
		y: 50,
		backgroundColor: null,
		itemStyle: {
			font: '9pt Trebuchet MS, Verdana, sans-serif',
			color: 'black'
		},
		itemHoverStyle: {
			color: '#039'
		},
		itemHiddenStyle: {
			color: 'gray'
		},
		itemWidth: 70
	},
	labels: {
		style: {
			color: '#99b'
		}
	}
};

var themes = {
'gradient': jQuery.extend(true, null, standard, {
	colors: ['#B00','#B60','#aB0','#6B0','#0B0','#0B6','#0BB','#06B','#00B','#60B','#B0B','#B06'],
	chart: {
		backgroundColor: {
			linearGradient: [0, 0, 0, 500],
			stops: [
				[0, 'rgb(255, 255, 255)'],
				[1, 'rgb(200, 200, 200)']
			]
		},
		borderColor: '#333',
		borderWidth: 2,
		marginBottom: 70,
		plotBackgroundColor: { // 'rgba(255, 255, 255, .9)',
			linearGradient: [0, 0, 0, 1000], // x0, y0, x1, y1
			stops: [
				[0, 'rgb(136,136,136)'],
				[1, 'rgb(238,238,238)']
			]
		},
		plotBorderColor: '#555',
		plotBorderWidth: 2,
		plotShadow: true,
		shadow: true
	},
	credits: {
		enabled: false
	},
	exporting: {
        width: 200
    },
    navigation: {
        buttonOptions: {
            align: 'center'
        }
    },
	legend: {
		backgroundColor: { // '#BBB',
			linearGradient: [0, 0, 0, 250], // x0, y0, x1, y1
			stops: [
				[0, 'rgb(200,200,200)'],
				[1, 'rgb(238,238,238)']
			]
		},
		borderWidth: 2,
		shadow: true
	},
	title: {
		style: {
			color: '#555'
		}
	},
	xAxis: {
		endOnTick: false,
		gridLineWidth: 1,
		maxPadding: 0.05,
		minPadding: 0.1,
		tickInterval: null,
		plotLines: [{
			color: '#777',
			width: 2,
			value: 0
		}],
		title: {
			style: {
				color: '#333'
			}
		}
	},
	yAxis: {
		plotLines: [{
			color: '#777',
			width: 2,
			value: 100
		}],
		title: {
			style: {
				color: '#333'
			}
		}
	}
}),
'dark-blue': jQuery.extend(true, null, standard, {
	colors: ["#DDDF0D", "#55BF3B", "#DF5353", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee", "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
	chart: {
		backgroundColor: {
			linearGradient: [0, 0, 250, 500],
			stops: [
				[0, 'rgb(48, 48, 96)'],
				[1, 'rgb(0, 0, 0)']
			]
		},
		borderColor: '#000000',
		className: 'dark-container',
		plotBackgroundColor: 'rgba(255, 255, 255, .1)',
		plotBorderColor: '#CCCCCC',
		plotShadow: false
	},
	title: {
		style: {
			color: '#C0C0C0'
		}
	},
	xAxis: {
		gridLineColor: '#333333',
		labels: {
			style: {
				color: '#A0A0A0'
			}
		},
		lineColor: '#A0A0A0',
		tickColor: '#A0A0A0',
		title: {
			style: {
				color: '#C0C0C0'
			}
		}
	},
	yAxis: {
		gridLineColor: '#333333',
		labels: {
			style: {
				color: '#A0A0A0'
			}
		},
		lineColor: '#A0A0A0',
		minorTickInterval: null,
		tickColor: '#A0A0A0',
		title: {
			style: {
				color: '#C0C0C0'
			}
		}
	},
	legend: {
		style: {
			color: '#A0A0A0'
		}
	},
	tooltip: {
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
		style: {
			color: '#F0F0F0'
		}
	},
	toolbar: {
		itemStyle: {
			color: 'silver'
		}
	},
	plotOptions: {
		line: {
			dataLabels: {
				color: '#CCC'
			},
			marker: {
				lineColor: '#333'
			}
		},
		spline: {
			marker: {
				lineColor: '#333'
			}
		},
		scatter: {
			marker: {
				lineColor: '#333'
			}
		}
	},
	legend: {
		itemStyle: {
			color: '#CCC'
		},
		itemHoverStyle: {
			color: '#FFF'
		},
		itemHiddenStyle: {
			color: '#444'
		}
	},
	credits: {
		style: {
			color: '#666'
		}
	},
	labels: {
		style: {
			color: '#CCC'
		}
	},
	navigation: {
		buttonOptions: {
			backgroundColor: {
				linearGradient: [0, 0, 0, 20],
				stops: [
					[0.4, '#606060'],
					[0.6, '#333333']
				]
			},
			borderColor: '#000000',
			symbolStroke: '#C0C0C0',
			hoverSymbolStroke: '#FFFFFF'
		}
	},
	exporting: {
		buttons: {
			exportButton: {
				symbolFill: '#55BE3B'
			},
			printButton: {
				symbolFill: '#7797BE'
			}
		}
	},
	// special colors for some of the
	legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
	legendBackgroundColorSolid: 'rgb(35, 35, 70)',
	dataLabelsColor: '#444',
	maskColor: 'rgba(255,255,255,0.3)'
}),
'default': {},
'gray': jQuery.extend(true, null, standard, {
	colors: ["#DDDF0D", "#7798BF", "#55BF3B", "#DF5353", "#aaeeee", "#ff0066", "#eeaaee", "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
	chart: {
		backgroundColor: {
			linearGradient: [0, 0, 0, 400],
			stops: [
				[0, 'rgb(120,120,120)'],
				[1, 'rgb(16, 16, 16)']
			]
		},
		borderWidth: 0,
		borderRadius: 15,
		marginBottom: 120,
		plotBackgroundColor: null,
		plotShadow: false,
		plotBorderWidth: 0
	},
	title: {
		style: {
			color: '#FFF',
			font: '16px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
		}
	},
	subtitle: {
		style: {
			color: '#DDD',
			font: '12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
		}
	},
	xAxis: {
		gridLineWidth: 0,
		lineColor: '#999',
		tickColor: '#999',
		labels: {
			style: {
				color: '#999',
				fontWeight: 'bold'
			}
		},
		title: {
			style: {
				color: '#AAA',
				font: 'bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
			}
		}
	},
	yAxis: {
		alternateGridColor: null,
		minorTickInterval: null,
		gridLineColor: 'rgba(255, 255, 255, .1)',
		lineWidth: 0,
		tickWidth: 0,
		labels: {
			style: {
				color: '#999',
				fontWeight: 'bold'
			}
		},
		title: {
			style: {
				color: '#AAA',
				font: 'bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
			}
		}
	},
	legend: {
		itemStyle: {
			color: '#CCC'
		},
		itemHoverStyle: {
			color: '#FFF'
		},
		itemHiddenStyle: {
			color: '#333'
		}
	},
	labels: {
		style: {
			color: '#CCC'
		}
	},
	tooltip: {
		backgroundColor: {
			linearGradient: [0, 0, 0, 50],
			stops: [
				[0, 'rgba(96, 96, 96, .8)'],
				[1, 'rgba(16, 16, 16, .8)']
			]
		},
		borderWidth: 0,
		style: {
			color: '#FFF'
		}
	},
	plotOptions: {
		line: {
			dataLabels: {
				color: '#CCC'
			},
			marker: {
				lineColor: '#333'
			}
		},
		spline: {
			marker: {
				lineColor: '#333'
			}
		},
		scatter: {
			marker: {
				lineColor: '#333'
			}
		}
	},
	toolbar: {
		itemStyle: {
			color: '#CCC'
		}
	},
	navigation: {
		buttonOptions: {
			backgroundColor: {
				linearGradient: [0, 0, 0, 20],
				stops: [
					[0.4, '#606060'],
					[0.6, '#333333']
				]
			},
			borderColor: '#000000',
			symbolStroke: '#C0C0C0',
			hoverSymbolStroke: '#FFFFFF'
		}
	},
	exporting: {
		buttons: {
			exportButton: {
				symbolFill: '#55BE3B'
			},
			printButton: {
				symbolFill: '#7797BE'
			}
		}
	},
	legendBackgroundColor: 'rgba(48, 48, 48, 0.8)',
	legendBackgroundColorSolid: 'rgb(70, 70, 70)',
	dataLabelsColor: '#444',
	maskColor: 'rgba(255,255,255,0.3)'
}),
'grid': jQuery.extend(true, null, standard, {
	yAxis: {
		alternateGridColor: null,
		minorTickInterval: 'auto'
	}
}),
'minimal': jQuery.extend(true, null, standard, {
	colors: ["#4572A7", "#AA4643", "#89A54E", "#80699B", "#3D96AE", "#DB843D", "#92A8CD", "#A47D7C", "#B5CA92"],
	chart: {
		borderWidth: 0,
		plotBackgroundColor: null,
		plotShadow: false,
		plotBorderWidth: 0
	},
	title: {
		style: {
			color: '#3E576F',
			font: '16px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
		}
	},
	subtitle: {
		style: {
			color: '#6D869F',
			font: '12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
		}
	},
	xAxis: {
		gridLineWidth: 0,
		lineColor: '#C0D0E0',
		tickColor: '#C0D0E0',
		labels: {
			style: {
				color: '#666',
				fontWeight: 'bold'
			}
		},
		title: {
			style: {
				color: '#6D869F',
				font: 'bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
			}
		}
	},
	yAxis: {
		alternateGridColor: null,
		minorTickInterval: null,
		lineWidth: 0,
		tickWidth: 0,
		labels: {
			style: {
				color: '#666',
				fontWeight: 'bold'
			}
		},
		title: {
			style: {
				color: '#6D869F',
				font: 'bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
			}
		}
	},
	legend: {
		itemStyle: {
			color: '#3E576F'
		},
		itemHoverStyle: {
			color: 'black'
		},
		itemHiddenStyle: {
			color: 'silver'
		}
	},
	labels: {
		style: {
			color: '#3E576F'
		}
	}
}),
'skies': jQuery.extend(true, null, standard, {
	colors: ["#514F78", "#42A07B", "#9B5E4A", "#72727F", "#1F949A", "#82914E", "#86777F", "#42A07B"],
	chart: {
		borderWidth: 0,
		plotBackgroundImage: 'skies.jpg',
		plotBackgroundColor: {
			linearGradient: [0, 0, 250, 500],
			stops: [
				[0, 'rgba(255, 255, 255, 1)'],
				[1, 'rgba(255, 255, 255, 0)']
			]
		}
	},
	title: {
		style: {
			color: '#3E576F',
			font: '16px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
		}
	},
	subtitle: {
		style: {
			color: '#6D869F',
			font: '12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
		}
	},
	xAxis: {
		gridLineWidth: 0,
		lineColor: '#C0D0E0',
		tickColor: '#C0D0E0',
		labels: {
			style: {
				color: '#666',
				fontWeight: 'bold'
			}
		},
		title: {
			style: {
				color: '#666',
				font: '12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
			}
		}
	},
	yAxis: {
		alternateGridColor: 'rgba(255, 255, 255, .5)',
		minorTickInterval: null,
		lineColor: '#C0D0E0',
		tickColor: '#C0D0E0',
		labels: {
			style: {
				color: '#666',
				fontWeight: 'bold'
			}
		},
		title: {
			style: {
				color: '#666',
				font: '12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
			}
		}
	},
	legend: {
		itemStyle: {
			color: '#3E576F'
		},
		itemHoverStyle: {
			color: 'black'
		},
		itemHiddenStyle: {
			color: 'silver'
		}
	},
	labels: {
		style: {
			color: '#3E576F'
		}
	}
})
}; // end themes

themes['dark-green'] = jQuery.extend(true, null, themes['dark-blue'], {
	chart: {
		backgroundColor: {
			linearGradient: [0, 0, 250, 500],
			stops: [
				[0, 'rgb(48, 96, 48)'],
				[1, 'rgb(0, 0, 0)']
			]
		}
	}
});

function showHelp() {
	hs.htmlExpand(null, {
		pageOrigin: {
			x: 450,
			y: 330
		},
		headingText: 'Jaanga Help',
		maincontentText: '<b>Display Tooltip</b>: Move cursor over both symbols and text in the legend.<br/>' +
			'<br/><b>Display Data Window</b>: Click one or more symbols to display sparkline, detailed statistics and links to more data.<br>' +
			'<br/><b>Select Index</b>: Choose stock exchange from \'Index\' list.<br/>' +
			'<br/><b>Select Setup or Theme</b>: Choose various views and themes from \'Setup\' and \'Themes\' lists.<br/>' +
			'<br/><b>Add Symbol</b>: Add symbols (separate by commas) to display in the \'Symbol\' box.<br/>' +
			'<br/><b>Zoom Window</b>: Click and drag on the screen.<br>' +
			'<br/><b>Zoom All</b>: Click on \'Reset Zoom\' in upper right of chart area.<br>' +
			'<br/><b>Print & Export Image</b>: Click on icons in middle / top of screen.<br>',
		width: 300,
		height: 475
	});
}

function showAbout() {
	hs.htmlExpand(null, {
		pageOrigin: {
			x: 250,
			y: 300
		},
		headingText: 'About Jaanga',
		maincontentText: '<br/>' +
		'<b>Vertical</b> = Volume<br/>' +
		'<b>Left & Right</b> = Losing & Rising<br/>' +
		'<b>Size</b> = Market Capitalization<br/>' +
		'<br/>Comprehensive ways of viewing innumerable numbers.<br/>' +
		'<br/>Adjust indices, portfolios, setups and themes:<br/><a href="jaanga3alpha-data17.js" target="_blank">Jaanga default parameters</a><br>' +
		'<br>More details from:' +
		'<br><a href="http://jaanga.com" target="_blank">http://jaanga.com</a>'
		,
		height: 400,
		width: 225
	});
}

