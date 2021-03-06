ChangeTheme = function(tname) {
    theme = [];
    theme['ClearSky'] = '{"q":{"fHd":"agency fb","dpsType":"1","perType":1,"dmgType":1,"ds":".","ns":1,"gs":",","cnt":1,"myName":1,"rank":1,"mhh":2,"mhh_unit":"-","abb":1,"DPS_T":1,"DPS_H":1,"DPS_D":1,"DPS_C":1,"DPS_M":1,"HPS_T":0,"HPS_H":1,"HPS_D":0,"HPS_M":0,"HPS_C":1,"unit":1,"max_unit":0,"palette":"job","myColorUse":1,"edgeType":"ridge","rd_navTL":1,"rd_navTR":1,"rd_navBL":1,"rd_navBR":1,"rd_tableTL":1,"rd_tableTR":1,"rd_tableBL":1,"rd_tableBR":1,"applyScope":"2","rd_graphTL":1,"rd_graphTR":1,"rd_graphBL":1,"rd_graphBR":1,"pattern":"noUse","iconSet":"colorful","btn_Capture":1,"btn_History":1,"btn_RequestEnd":1,"btn_YOU":1,"act":"2","act_rd":1,"act_rh":1,"act_md":0,"act_mh":0,"act_rank":1,"act_max":1,"time_italic":0,"target_italic":0,"rps_italic":0,"header_italic":0,"body_italic":0,"viewDPS":1,"viewHPS":1,"tableOrder":1,"boldYOU":1,"boldOther":1,"borderTextType":"shadow","ani":1,"gradient":1,"direction":"right","bar_pet":1,"bar_ds":1,"bar_oh":1,"bar_position":"right","bar_position_DPS":"left","arrow":1},"Color":{"accent":"219FED","navBg":"9F9F9F","edge":"999999","target":"7ABAFF","rps":"50BFFF","pattern":"000000","tableHd":"E4E4E4","tableHdText":"000000","tableBg":"FFFFFF","tableYOU":"FFFFFF","tableOther":"FFFFFF","view24TableYOU":"FFFFFF","view24TableOther":"FFFFFF","view24BgYOU":"03A9F4","view24BgOther":"E1E1E1","tableLine":"FFFFFF","tableLineVer":"000000","tableExYOU":"FFD3F2","tableExOther":"34D4FF","tableBorderYOU":"FF1919","tableBorderOther":"000000","myColor":"629FFF","PLD":"B5E2F2","WAR":"FF2721","DRK":"FF5B78","GNB":"FFE665","WHM":"FFFFFF","SCH":"6864FF","AST":"FF7C28","ds":"4dd0e1","oh":"ef5350","MNK":"FFC31E","DRG":"3752D8","NIN":"EE2E48","SAM":"E45A0F","BRD":"E0FF69","MCH":"1ED0FF","DNC":"FFC9F8","BLM":"AD74FF","SMN":"7CFF1B","RDM":"FF3DE0","BLU":"2865FF","LMB":"FFBB00","CBO":"757575","pet":"BEFF95","CRP":"454545","BSM":"454545","ARM":"454545","GSM":"454545","LTW":"454545","WVR":"454545","ALC":"454545","CUL":"454545","BTN":"303030","MIN":"303030","FSH":"303030","Tanker":"475ECE","Healer":"467837","DPS":"813B3C","Crafter":"454545","Gathering":"303030","YOU":"607D8B","Other":"263238"},"Range":{"navTime":100,"navIcon":100,"navBg":32,"edge":81,"target":100,"rps":100,"pattern":100,"tableHd":60,"tableHdText":100,"tableBg":25,"tableYOU":100,"tableOther":100,"tableLine":35,"tableLineVer":20,"view24BgOther":50,"view24BgYOU":50,"view24TableYOU":100,"view24TableOther":100,"bar":65,"pet":60,"ds":50,"oh":35,"sizeNav":45,"sizeEdge":1,"sizeRadius":0,"sizeTime":40,"sizeTarget":16,"sizeRPS":14,"sizeGap":3,"sizeIcon":26,"sizePattern":7,"sizeHd":20,"sizeHdText":17,"sizeRadiusTable":0,"sizeBody":20,"sizeBodyText":13,"sizeBodyIcon":20,"sizeLine":1,"sizeLineVer":1,"size24TableSlice":5,"size24TableHeight":35,"size24TableIdxWd":3,"size24BodyIcon":20,"size24BodyNameText":12,"size24BodyDataText":12,"sizeGraph_bar":20,"sizeGraph_pet":20,"sizeGraph_ds":20,"sizeGraph_oh":20,"sizeRadiusGraph":0,"sizeDPSTable":9,"sizeHPSTable":4,"sizeHdGap":1,"sizeDPSGap":1,"sizeHPSGap":9}}';
    try {
        applyKeys(theme[tname])
    } catch {}
}
l = {
    Notice: {
        strong: {
            KR: '<b style="color:#ffea00">????????????<br>????????? ????????????????????? ???????????????!</b><br><br>????????? ??????????????? <b>?????? ?????? ?????????</b> ?????? ???????????????.<br>PC ????????? <b>???????????? ???????????? ????????? ??? ????????? ?????? ?????? ??????</b> ???????????????.<br><br><font style="color:cyan">FFXIV_ACT_Plugin.dll 2.0.2.3 ?????? ????????? ???????????? ?????????<br>ACT ??? Plugins ??? FFXIV Settings Tab ??? <b>Disable Combine Pets with Owner</b> ????????? ???????????????.</font><br><br>Please select <b>your language</b> : <a href="#" id="KR" onclick="initOverlay(this.id)">?????????</a> ??? <a href="#" id="EN" onclick="initOverlay(this.id)">English</a> ??? <a href="#" id="JP" onclick="initOverlay(this.id)">?????????</a> ??? <a href="#" id="CN" onclick="initOverlay(this.id)">????????????</a> ??? <a href="#" id="DE" onclick="initOverlay(this.id)">Deutsch</a> ??? <a href="#" id="FR" onclick="initOverlay(this.id)">French</a><br>',
            EN: '<b style="color:#ffea00">MopiMopi<br>Experience the Incredible Customizing!</b><br><br><b>Chrome or Safari</b> apps are recommended for mobile environment.<br>PC Users : <b>OverlayProc ??? MUST Check "AppRegion"</b> to limit the draggable area.<br><br><font style="color:cyan">If you are using FFXIV_ACT_Plugin version 2.0.2.3 or later,<br>ACT ??? Plugins ??? FFXIV Settings Tab ??? <b>Check Disable Combine Pets with Owner</b>.</font><br><br>Please select <b>your language</b> : <a href="#" id="KR" onclick="initOverlay(this.id)">?????????</a> ??? <a href="#" id="EN" onclick="initOverlay(this.id)">English</a> ??? <a href="#" id="JP" onclick="initOverlay(this.id)">?????????</a> ??? <a href="#" id="CN" onclick="initOverlay(this.id)">????????????</a> ??? <a href="#" id="DE" onclick="initOverlay(this.id)">Deutsch</a> ??? <a href="#" id="FR" onclick="initOverlay(this.id)">French</a><br>',
            CN: '<b style="color:#ffea00">MopiMopi<br>?????????????????????????????????</b><br><br>??????????????????????????????????????????<a href="#" id="ClearSky" onclick="ChangeTheme(this.id)">??????</a><br><br>?????????????????????(OBS Studio, XSplit???)??????<br>????????????<a href="https://github.com/ZCube/ACTWebSocket/releases" target="_blank">ACTWebsocket 1.3.3.9?????????</a>?????????<br><br>?????????????????????????????????<b>Chrome&Safari</b>?????????<br>PC?????????????????????<b>OverlayProc ??? "AppRegion"</b>????????????????????????<br><br>???????????????<b>????????????</b> : <a href="#" id="KR" onclick="initOverlay(this.id)">?????????</a> ??? <a href="#" id="JP" onclick="initOverlay(this.id)">?????????</a> ??? <a href="#" id="CN" onclick="initOverlay(this.id)">????????????</a> ??? <a href="#" id="EN" onclick="initOverlay(this.id)">English</a> ??? <a href="#" id="DE" onclick="initOverlay(this.id)">Deutsch</a><br>'
        },
        tip: {
            KR: '[MIRANQUIL & DieMoe 220105] MopiMopi ver.20220102 / ??????@?????????',
            EN: '[MIRANQUIL & DieMoe 220105] MopiMopi ver.20220102 / HAERU@Moogle (KR)',
            CN: '[MIRANQUIL & DieMoe 220105] MopiMopi ver.20220102 / HAERU@Moogle (KR)'
        },
        update: {
            KR: '<div name="row"><div class="b">01/02</div><div class="m">????????? ?????? ?????? ??????</div></div><div name="row"><div class="u">12/28</div><div class="m">[?????????@?????????] 6.0 ?????? ?????? ????????? ?????? (SGE)</div></div><div name="row"><div class="c">12/19</div><div class="m">[???????????????@?????????] 6.0 ???????????? ????????? ??????</div></div><div name="row"><div class="u">12/13</div><div class="m">[?????????@?????????] 6.0 ????????? ??????</div></div><div name="row"><div class="c">12/12</div><div class="m">[?????????@?????????] 6.0 ????????? ???????????? ????????? ??????</div></div><div name="row"><div class="u">12/09</div><div class="m">[?????????@?????????] 6.0 ?????? ??? ????????? ?????? (SMN)</div></div><div name="row"><div class="u">12/03</div><div class="m">[?????????@?????????] 6.0 ?????? ?????? ????????? ?????? (RPR/SGE)</div></div><div name="row"><div class="b">12/03</div><div class="m">6.0 ?????? ????????? ?????? ?????? ?????? ????????????. <a href="https://docs.google.com/spreadsheets/d/1Cqni0rjvQLnXjK2dhx95xk_NOIIWXt9PK8-2gez5pTI/edit#gid=0" target="_blank">????????? ????????? ????????????</a></div></div><div name="row"><div class="u">11/30</div><div class="m">6.0 ?????? ?????? ????????? ?????? (RPR/SGE)</div></div><div name="row"><div class="c">04/01</div><div class="m">[Matthew Smith/Gmail] ???????????? ?????????<Br>(RD ??? Total DPS, RH ??? Total HPS, MD ??? My DPS, MH ??? My HPS)</div></div><div name="row"><div class="n">01/01</div><div class="m">????????? 2021????????? ??????????????? ??????! ?????? ??? ?????? ????????????! ?????????</div></div>',
            EN: '<div name="row"><div class="b">01/02</div><div class="m">Fixed the hex code input bug</div></div><div name="row"><div class="u">12/28</div><div class="m">[Oh Miru@Anima/Mana] Added data of new action (SGE)</div></div><div name="row"><div class="c">12/20</div><div class="m">[???????????????@?????????/?????????] Adjusted name format of Trust comrades</div></div><div name="row"><div class="c">12/19</div><div class="m">[Fairy Selene@Asura/Mana] WHM data modified</div></div><div name="row"><div class="u">12/13</div><div class="m">[Oh Miru@Anima/Mana] Added 6.0 Carbuncle</div></div><div name="row"><div class="c">12/12</div><div class="m">[Oh Miru@Anima/Mana] Changed Limit Break data</div></div><div name="row"><div class="u">12/09</div><div class="m">[Oh Miru@Anima/Mana] Added data of new pets (SMN)</div></div><div name="row"><div class="u">12/03</div><div class="m">[Oh Miru@Anima/Mana] Added icon of new jobs (RPR/SGE)</div></div><div name="row"><div class="b">12/03</div><div class="m">Please report 6.0 pets or actions name. <a href="https://docs.google.com/spreadsheets/d/1Cqni0rjvQLnXjK2dhx95xk_NOIIWXt9PK8-2gez5pTI/edit#gid=0" target="_blank">????????? Report link</a></div></div><div name="row"><div class="u">11/30</div><div class="m">Added data of new jobs (RPR/SGE)</div></div><div name="row"><div class="c">04/01</div><div class="m">[Matthew Smith/Gmail] Change Abbreviations<Br>(RD ??? Total DPS, RH ??? Total HPS, MD ??? My DPS, MH ??? My HPS)</div></div><div name="row"><div class="n">01/01</div><div class="m">????????? 2021 Best wishes for a Happy New Year! ?????????</div></div>',
            CN: '<div name="row"><div class="b">01/02</div><div class="m">????????????????????????bug</div></div><div name="row"><div class="u">12/28</div><div class="m">[Oh Miru@Anima/Mana] ???????????????????????????</div></div><div name="row"><div class="c">12/20</div><div class="m">[???????????????@?????????/?????????] ??????????????????????????????</div></div><div name="row"><div class="c">12/19</div><div class="m">[Fairy Selene@Asura/Mana] ????????????????????????</div></div><div name="row"><div class="u">12/13</div><div class="m">[?????????@?????????] ??????6.0?????????</div></div><div name="row"><div class="c">12/12</div><div class="m">[Oh Miru@Mana/Anima] ?????????????????????</div></div><div name="row"><div class="u">12/09</div><div class="m">[Oh Miru@Mana/Anima] ???????????????????????? (SMN)</div></div><div name="row"><div class="u">12/03</div><div class="m">[Oh Miru@Mana/Anima] ??????????????????????????????/?????????</div></div><div name="row"><div class="b">12/03</div><div class="m">???????????????6.0??????????????????????????????????????????????????????<a href="https://docs.google.com/spreadsheets/d/1Cqni0rjvQLnXjK2dhx95xk_NOIIWXt9PK8-2gez5pTI/edit#gid=0" target="_blank">????????? ????????????</a></div></div><div name="row"><div class="u">11/30</div><div class="m">????????????????????????????????????????????????</div></div><div name="row"><div class="c">04/01</div><div class="m">[Matthew Smith/Gmail] ????????????<Br>(RD ??? Total DPS, RH ??? Total HPS, MD ??? My DPS, MH ??? My HPS)</div></div><div name="row"><div class="n">01/01</div><div class="m">????????? 2021 ???????????????????????? ?????????</div></div>'
        }
    },
    msg: {
        comma: {
            m: {
                KR: ", ",
                JP: "???",
                EN: ", ",
                FR: ", ",
                DE: ", ",
                CN: "???",
            }
        },
        overlayBg: {
            m: {
                KR: "?????? ???????????? ?????? ????????? ???????????????: png, jpg, jpeg, gif.",
                JP: "??????????????????????????????????????????????????????:png, jpg, jpeg, gif???",
                EN: "Only files with the following extensions are allowed: png, jpg, jpeg, gif.",
                FR: "Seuls les fichiers avec les extensions suivantes sont accept??s : png, jpg, jpeg, gif.",
                DE: "Es sind nur Dateien mit den folgenden Endungen erlaubt: png, jpg, jpeg, gif.",
                CN: "?????????png???jpg???jpeg???gif?????????",
            }
        },
        Capture: {
            m: {
                KR: "?????? ????????? ACT ?????? ????????? ?????? Screenshot ???????????? ????????? ??? ????????????.",
                JP: "ACT?????????????????????ACT?????????????????????Screenshot????????????????????????????????????",
                EN: "The capture file can be found in the Screenshot folder of your ACT directory.",
                FR: "Le screenshot peut ??tre trouv?? dans le r??pertoire Screenshot d\'ACT.",
                DE: "Du findest den aufgenommenen Screenshot in deinem ACT-Ordner unter ScreenShot.",
                CN: "????????????ACT????????????Screenshot??????????????????",
            }
        },
        submit: {
            m: {
                KR: "?????? ????????? ??????????????????.",
                JP: "????????????????????????????????????",
                EN: "The change applied.",
                FR: "La modification a ??t?? appliqu??e.",
                DE: "Einstellungen wurden ??bernommen.",
                CN: "??????????????????",
            }
        },
        ok: {
            m: {
                KR: "??????????????????.",
                JP: "?????????????????????",
                EN: "Registered.",
                FR: "Enregistr??.",
                DE: "Registriert.",
                CN: "????????????",
            }
        },
        hiddenTable: {
            m: {
                KR: "?????? ????????? ???????????????.",
                JP: "????????????????????????????????????",
                EN: "The overlay switches to standby mode.",
                FR: "L\'overlay passe en mode veille.",
                DE: "Das Overlay wurde in den Standby versetzt.",
                CN: "????????????????????????",
            }
        },
        initConfirm: {
            m: {
                KR: "????????? ?????? ?????? ?????? ????????? ??????????????? ???????????? ?????? ???????????? ???????????????. ???????????? ?????????????????????????",
                JP: "??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
                EN: "Any changes to the settings will be restored to their defaults and your personal data will be deleted. Do you want to proceed with the initialization?",
                FR: "Toutes les modificationsd des diff??rents param??tres seront remis ?? z??ro et vos donn??es personnelles seront effac??es. Voulez-vous lancer la r??initialisation ?",
                DE: "Alle Einstellungen werden zur??ckgesetzt. Deine pers??nlichen Einstellungen gehen unwiderruflich verloren! M??chtest du fortfahren?",
                CN: "????????????????????????????????????????????????????????????????????????????????????????????????",
            }
        },
        init: {
            m: {
                KR: "???????????? ??????????????????.",
                JP: "?????????????????????????????????",
                EN: "The initialization completed successfully.",
                FR: "Initialisation termin??e avec succ??s.",
                DE: "Erfolgreich initialisiert.",
                CN: "??????????????????",
            }
        },
        backup: {
            m: {
                KR: "????????? ??????????????????.",
                JP: "??????????????????????????????????????????",
                EN: "The backup completed successfully.",
                FR: "Sauvegarde r??alis??e avec succ??s.",
                DE: "Backup erfolgreich erstellt.",
                CN: "???????????????",
            }
        },
        restore: {
            m: {
                KR: "????????? ??????????????????.",
                JP: "??????????????????????????????",
                EN: "The restore completed successfully.",
                FR: "Restauration termin??e avec succ??s.",
                DE: "Das Backup wurde erfolgreich wiederhergestellt.",
                CN: "???????????????",
            }
        },
        noData: {
            m: {
                KR: "?????? ???????????? ???????????? ????????????.",
                JP: "???????????????????????????????????????????????????",
                EN: "The backup data does not exist.",
                FR: "Aucune sauvegarde pr??sente.",
                DE: "Das Backup existiert nicht.",
                CN: "????????????????????????",
            }
        },
        noInput: {
            m: {
                KR: "???????????? ????????????.",
                JP: "?????????????????????????????????????????????",
                EN: "There is no input value.",
                FR: "Il n\'y a pas de valeur d'entr??e",
                DE: "Kein Eingabewert erkannt.",
                CN: "??????????????????",
            }
        },
        notData: {
            m: {
                KR: "????????? ????????? ????????? ????????????.",
                JP: "????????????????????????????????????????????????",
                EN: "Not a valid data type.",
                FR: "Type de donn??e non valide.",
                DE: "Kein g??ltiger Datentyp.",
                CN: "?????????????????????",
            }
        }
    },
    NAV: {
        main: {
            tt: {
                target: {
                    KR: '???????????? ',
                    JP: 'MopiMopi ',
                    EN: 'MopiMopi ',
                    FR: 'MopiMopi ',
                    DE: 'MopiMopi ',
                    CN: "MopiMopi ",
                },
                rps: {
                    KR: '????????? ???????????????.',
                    JP: '?????????????????????????????????',
                    EN: 'Please start the combat.',
                    FR: 'D??marrez un combat.',
                    DE: 'Warte auf Kampf.',
                    CN: "??????????????????",
                }
            },
            dr: {
                pets: {
                    tt: {
                        KR: "????????? ????????? ????????????",
                        JP: "????????????????????????????????????",
                        EN: "Combine Pets with Owner",
                        FR: "Combiner les familiers aux propri??taires",
                        DE: "Charakter und Begleiter zusammenfassen",
                        CN: "??????????????????????????????",
                    },
                    e: "dr_checkbox"
                },
                view24: {
                    tt: {
                        KR: "????????? ??????",
                        JP: "??????????????????",
                        EN: "Raid Mode",
                        FR: "Mode Raid",
                        DE: "Raid Modus",
                        CN: "Raid??????",
                    },
                    e: "dr_checkbox"
                },
                hideName: {
                    tt: {
                        KR: "?????? ?????????",
                        JP: "???????????????",
                        EN: "Hide the Name",
                        FR: "Cacher le nom",
                        DE: "Namen ausblenden",
                        CN: "????????????",
                    },
                    e: "dr_checkbox"
                },
                fullscreen: {
                    tt: d.fullscreen,
                    e: "dr_link"
                },
                settings: {
                    tt: d.settings,
                    e: "dr_link"
                }
            },
            btn: {
                Capture: {
                    m: d.Capture
                },
                History: {
                    m: {
                        KR: "????????????<font class='ex'> ??? ????????????</font>",
                        JP: "???????????????<font class='ex'> ??? ???????????????</font>",
                        EN: "History<font class='ex'> ??? When not in combat</font>",
                        FR: "Historique<font class='ex'> ??? Si hors combat</font>",
                        DE: "Historie<font class='ex'> ??? Wenn nicht im Kampf</font>",
                        CN: "??????<font class='ex'> ??? ????????????</font>",
                    }
                },
                RequestEnd: {
                    m: {
                        KR: '?????? ?????? ??????',
                        JP: '????????????????????????',
                        EN: 'End Encounter',
                        FR: 'Terminer le combat',
                        DE: 'Stoppe den Kampf',
                        CN: "??????????????????",
                    }
                },
                YOU: {
                   m:{
                    KR: 'YOU',
                    JP: 'YOU',
                    EN: 'YOU',
                    FR: 'YOU',
                    DE: 'YOU',
                    CN: "?????????YOU",
                   }
                },
                More: {
                    m: d.More
                }
            }
        },
        history: {
            tt: {
                KR: '????????????',
                JP: '???????????????',
                EN: 'History',
                FR: 'Historique',
                DE: 'Historie',
                CN: "??????",
            },
            btn: {
                Back: {
                    m: d.Back
                },
                Capture: {
                    m: d.Capture
                }
            }
        },
        settings: {
            tt: d.settings,
            dr: {
                preview: {
                    tt: {
                        KR: "?????? ??????",
                        JP: "???????????????",
                        EN: "Preview",
                        FR: "Aper??u",
                        DE: "Vorschau",
                        CN: "??????",
                    },
                    e: "dr_checkbox"
                },
                keyboard: {
                    tt: {
                        KR: "????????? ??????<font class='ex'> ??? ?????????</font>",
                        JP: "????????????????????????<font class='ex'> ??? ????????????</font>",
                        EN: "Keyboard Lock<font class='ex'> ??? Mobile</font>",
                        FR: "Clavier bloqu??<font class='ex'> ??? Mobile</font>",
                        DE: "Tastatur sperren<font class='ex'> ??? Handy</font>",
                        CN: "????????????<font class='ex'> ??? ????????????</font>",
                    },
                    e: "dr_checkbox"
                },
                fullscreen: {
                    tt: d.fullscreen,
                    e: "dr_link"
                },
                home: {
                    tt: {
                        KR: "?????? ???????????? ????????????",
                        JP: "????????????????????????",
                        EN: "Back to Main Page",
                        FR: "Retour ?? la page principale",
                        DE: "Zur??ck zur Hauptseite",
                        CN: "????????????",
                    },
                    e: "dr_link"
                }
            },
            btn: {
                Back: {
                    m: d.Back
                },
                More: {
                    m: d.More
                }
            }
        }
    },
    Settings: {
        Lang: {
            tt: {
                KR: "??????",
                JP: "??????",
                EN: "Language",
                FR: "Langue",
                DE: "Sprache",
                CN: "??????"
            },
            m: {
                KR: {
                    KR: "?????????",
                    JP: "?????????",
                    EN: "?????????",
                    FR: "?????????",
                    DE: "?????????",
                    CN: "?????????",
                },
                EN: {
                    KR: "English",
                    JP: "English",
                    EN: "English",
                    FR: "English",
                    DE: "English",
                    CN: "English",
                },
                JP: {
                    KR: "?????????<font class='ex'> ??? by Korea [?????????] ???????????????, ????????????</font>",
                    JP: "?????????<font class='ex'> ??? by Korea [?????????] ???????????????, ????????????</font>",
                    EN: "?????????<font class='ex'> ??? by Korea [?????????] ???????????????, ????????????</font>",
                    FR: "?????????<font class='ex'> ??? by Korea [?????????] ???????????????, ????????????</font>",
                    DE: "?????????<font class='ex'> ??? by Korea [?????????] ???????????????, ????????????</font>",
                    CN: "?????????<font class='ex'> ??? by Korea [?????????] ???????????????, ????????????</font>"
                },
                CN: {
                    KR: "????????????<font class='ex'> ??? by ????????? [?????????] ???????????????</font>",
                    JP: "????????????<font class='ex'> ??? by ????????? [?????????] ???????????????</font>",
                    EN: "????????????<font class='ex'> ??? by ????????? [?????????] ???????????????</font>",
                    DE: "????????????<font class='ex'> ??? by ????????? [?????????] ???????????????</font>",
                    CN: "????????????<font class='ex'> ??? by ????????? [?????????] ???????????????</font>",
                },
                DE: {
                    KR: "Deutsch<font class='ex'> ??? by Chaos [Phoenix] Shunittseru Tohka</font>",
                    JP: "Deutsch<font class='ex'> ??? by Chaos [Phoenix] Shunittseru Tohka</font>",
                    EN: "Deutsch<font class='ex'> ??? by Chaos [Phoenix] Shunittseru Tohka</font>",
                    FR: "Deutsch<font class='ex'> ??? by Chaos [Phoenix] Shunittseru Tohka</font>",
                    DE: "Deutsch<font class='ex'> ??? by Chaos [Phoenix] Shunittseru Tohka</font>",
                    CN: "Deutsch<font class='ex'> ??? by Chaos [Phoenix] Shunittseru Tohka</font>"
                },
                FR: {
                    KR: "French<font class='ex'> ??? by Light [Shiva] Elarun Moyse</font>",
                    JP: "French<font class='ex'> ??? by Light [Shiva] Elarun Moyse</font>",
                    EN: "French<font class='ex'> ??? by Light [Shiva] Elarun Moyse</font>",
                    FR: "French<font class='ex'> ??? by Light [Shiva] Elarun Moyse</font>",
                    DE: "French<font class='ex'> ??? by Light [Shiva] Elarun Moyse</font>",
                    CN: "French<font class='ex'> ??? by Light [Shiva] Elarun Moyse</font>",
                }
            },
            i: "language",
            e: "li_radio",
            p: "Settings",
            ul: 1
        },
        Data: {
            tt: d.Data,
            i: "donut_large",
            e: "li_link",
            b: "settings",
            ul: 1
        },
        Design: {
            tt: {
                KR: "?????????",
                JP: "????????????",
                EN: "Design",
                FR: "Design",
                DE: "Design",
                CN: "??????",
            },
            i: "brush",
            e: "li_link",
            p: "settings",
            ul: 0
        },
        Overlay: {
            tt: {
                KR: "????????????",
                JP: "??????????????????",
                EN: "Overlay",
                FR: "Overlay",
                DE: "Overlay",
                CN: "Overlay",
            },
            i: "web_asset",
            e: "li_link",
            p: "settings",
            ul: 0
        },
        Tool: {
            tt: {
                KR: "?????? ??????",
                JP: "???????????????",
                EN: "Management Tools",
                FR: "Outils de gestion",
                DE: "Management Tools",
                CN: "????????????",
            },
            i: "build",
            e: "li_link",
            p: "settings",
            ul: 0
        },
        Version: {
            tt: {
                KR: "??????",
                JP: "???????????????",
                EN: "Version",
                FR: "Version",
                DE: "Version",
                CN: "??????",
            },
            m: {
                KR: 'MopiMopi ver.20220102',
                JP: 'MopiMopi ver.20220102',
                EN: 'MopiMopi ver.20220102',
                FR: 'MopiMopi ver.20220102',
                DE: 'MopiMopi ver.20220102',
                CN: "MopiMopi ver.20220102",
            },
            i: "new_releases",
            e: "li_2line",
            ul: 1
        },
        About: {
            tt: {
                KR: "??????",
                JP: "???????????????",
                EN: "Help",
                FR: "Aide",
                DE: "Hilfe",
                CN: "??????",
            },
            m: {
                KR: 'FF14 KR Moogle ?????? ??? ffxivHAERU@gmail.com',
                JP: 'FF14 KR Moogle ?????? ??? ffxivHAERU@gmail.com',
                EN: 'FF14 KR Moogle ?????? ??? ffxivHAERU@gmail.com',
                FR: 'FF14 KR Moogle ?????? ??? ffxivHAERU@gmail.com',
                DE: 'FF14 KR Moogle ?????? ??? ffxivHAERU@gmail.com',
                CN: 'FF14 KR Moogle ?????? ??? ffxivHAERU@gmail.com',
            },
            i: "help_outline",
            e: "li_2line",
            ul: 0
        }
    },
    Data: {
        tab_general: {
            tt: d.general,
            e: "tab_btn",
            w: 25,
            p: "Data",
            inner: {
                format: {
                    tt: {
                        KR: "??????",
                        JP: "??????",
                        EN: "Formatting",
                        FR: "Formatage",
                        DE: "Formatierung",
                        CN: "??????",
                    },
                    i: "view_column",
                    e: "li_link",
                    ul: 1
                },
                order: {
                    tt: {
                        KR: "??????",
                        JP: "??????",
                        EN: "Order",
                        FR: "Ordre",
                        DE: "Reihenfolge",
                        CN: "??????",
                    },
                    i: "swap_vert",
                    e: "li_link",
                    ul: 0
                },
                pets: {
                    tt: {
                        KR: "????????? ????????? ????????????",
                        JP: "????????????????????????????????????",
                        EN: "Combine Pets with Owner",
                        FR: "Combiner les familiers avec les propri??taires",
                        DE: "Charakter und Begleiter zusammenfassen",
                        CN: "??????????????????????????????",
                    },
                    i: "merge_type",
                    e: "li_checkbox",
                    ul: 1
                }
            }
        },
        tab_number: {
            tt: {
                KR: "??????",
                JP: "??????",
                EN: "Number",
                FR: "Nombre",
                DE: "Zahlen",
                CN: "??????",
            },
            e: "tab_btn",
            w: 25,
            p: "Data",
            inner: {
                dpsType: {
                    tt: {
                        KR: "DPS, HPS ????????? ??????",
                        JP: "DPS???HPS??????????????????",
                        EN: "Data Type of DPS, HPS",
                        FR: "Type de donn??es DPS/HPS",
                        DE: "Datentyp vom DPS/HPS",
                        CN: "DPS???HPS ????????????",
                    },
                    m: {
                        0: d.int,
                        1: d.float
                    },
                    i: "edit",
                    e: "li_radio",
                    p: "Data_number",
                    ul: 1
                },
                perType: {
                    tt: {
                        KR: "% ????????? ??????",
                        JP: "%??????????????????",
                        EN: "Data Type of %",
                        FR: "Type de donn??es %",
                        DE: "Datentyp der %",
                        CN: "% ????????????",
                    },
                    m: {
                        0: d.int,
                        1: d.float,
                    },
                    i: "edit",
                    e: "li_radio",
                    p: "Data_number",
                    ul: 0
                },
                dmgType: {
                    tt: {
                        KR: "Damage, Healed ????????? ??????",
                        JP: "Damage???Healed??????????????????",
                        EN: "Data Type of Damage, Healed ",
                        FR: "Type de donn??es D??g??ts, Boucliers ",
                        DE: "Datentyp der Damage, Healed ",
                        CN: "Damage???Healed ????????????",
                    },
                    m: {
                        0: d.int,
                        1: d.float
                    },
                    i: "edit",
                    e: "li_radio",
                    p: "Data_number",
                    ul: 0
                },
                ds: {
                    tt: {
                        KR: "????????? ??????",
                        JP: "??????????????????",
                        EN: "Decimal Symbol",
                        FR: "Symbol d??cimal",
                        DE: "Dezimaltrennzeichen",
                        CN: "???????????????",
                    },
                    m: {
                        ".": d["."],
                        ",": d[","],
                        "_": d["_"],
                        "'": d["'"]
                    },
                    i: "format_quote",
                    e: "li_radio",
                    p: "Data_number",
                    ul: 0
                },
                ns: {
                    tt: {
                        KR: "????????? ?????? ?????????",
                        JP: "????????????????????????",
                        EN: "No. of Digits after Decimal",
                        FR: "Nombre de chiffres apr??s la virgule",
                        DE: "Anzahl der Dezimalstellen",
                        CN: "??????????????????",
                    },
                    m: {
                        1: d["1"],
                        2: d["2"]
                    },
                    i: "exposure_plus_2",
                    e: "li_radio",
                    p: "Data_number",
                    ul: 0
                },
                gs: {
                    tt: {
                        KR: "????????? ?????? ??????",
                        JP: "??????????????????",
                        EN: "Digit Grouping Symbol",
                        FR: "Symbole de s??paration de groupe",
                        DE: "Symbol f??r Zifferngruppierung",
                        CN: "???????????????",
                    },
                    m: {
                        0: d.noUse,
                        ".": d["."],
                        ",": d[","],
                        "_": d["_"],
                        "'": d["'"],
                    },
                    i: "format_quote",
                    e: "li_radio",
                    p: "Data_number",
                    ul: 0
                },
                unit: {
                    tt: {
                        KR: "??????",
                        JP: "??????",
                        EN: "Unit",
                        FR: "Unit??",
                        DE: "Unit",
                        CN: "??????",
                    },
                    m: {
                        KR: "1k = 1000, 1M = 1000000",
                        JP: "1k = 1000???1M = 1000000",
                        EN: "1k = 1000, 1M = 1000000",
                        FR: "1k = 1000, 1M = 1000000",
                        DE: "1k = 1000, 1M = 1000000",
                        CN: "1k = 1000???1M = 1000000",
                    },
                    i: "sort",
                    e: "li_2line_checkbox_normal",
                    ul: 0
                },
                max_unit: {
                    tt: {
                        KR: "MaxHit, MaxHeal ??????",
                        JP: "MaxHit???MaxHeal??????",
                        EN: "Unit of MaxHit, MaxHeal",
                        FR: "Unit??s de MaxHit, MaxHeal",
                        DE: "Unit des MaxHit, MaxHeal",
                        CN: "MaxHit???MaxHeal ??????",
                    },
                    m: {
                        KR: "1k = 1000, 1M = 1000000",
                        JP: "1k = 1000???1M = 1000000",
                        EN: "1k = 1000, 1M = 1000000",
                        FR: "1k = 1000, 1M = 1000000",
                        DE: "1k = 1000, 1M = 1000000",
                        CN: "1k = 1000???1M = 1000000",
                    },
                    i: "sort",
                    e: "li_2line_checkbox_normal",
                    ul: 0
                }
            }
        },
        tab_name: {
            tt: {
                KR: "??????",
                JP: "??????",
                EN: "Name",
                FR: "Nom",
                DE: "Namen",
                CN: "??????",
            },
            e: "tab_btn",
            w: 25,
            p: "Data",
            inner: {
                cnt: {
                    tt: {
                        KR: "?????? ?????? ??????",
                        JP: "????????????????????????",
                        EN: "Display Type of Name",
                        FR: "Type d'affichage des noms",
                        DE: "Anzeigetyp des Namens",
                        CN: "??????????????????",
                    },
                    m: {
                        1: {
                            KR: "??????????????? ??????",
                            JP: "???????????????",
                            EN: "Full Name",
                            FR: "Nom complet",
                            DE: "Voller Name",
                            CN: "??????",
                        },
                        2: {
                            KR: "?????? ????????????",
                            JP: "????????????????????????",
                            EN: "Surname Abbreviated",
                            FR: "Initiale pr??nom",
                            DE: "Nachname abgek??rzt",
                            CN: "?????????",
                        },
                        3: {
                            KR: "??? ????????????",
                            JP: "????????????????????????",
                            EN: "Forename Abbreviated",
                            FR: "Initiale nom",
                            DE: "Vorname abgek??rzt",
                            CN: "?????????",
                        },
                        4: {
                            KR: "???????????? ??????",
                            JP: "??????????????????????????????",
                            EN: "Initials",
                            FR: "Initiales",
                            DE: "Initialien",
                            CN: "?????????????????????",
                        }
                    },
                    i: "people",
                    e: "li_radio",
                    p: "Data_name",
                    ul: 1
                },
                rank: {
                    tt: {
                        KR: "????????? ?????? ??????",
                        JP: "??????????????????",
                        EN: "Display Rank in Name",
                        FR: "Afficher le rang dans le nom",
                        DE: "Zeige Rank im Namen",
                        CN: "????????????????????????",
                    },
                    i: "format_list_numbered",
                    e: "li_checkbox",
                    ul: 0
                },
                myName: {
                    tt: {
                        KR: "??? ????????? YOU??? ??????",
                        JP: "?????????????????????????????????YOU?????????",
                        EN: "Convert Name to YOU",
                        FR: "Convertir votre nom en YOU",
                        DE: "Konvertiert deinen Namen in ???YOU???",
                        CN: "???YOU??????????????????",
                    },
                    m: {
                        KR: "<a href='http://ffxivhaeru.blog.me/221325149295' target='_blank'>?????? ??? ????????????</a>",
                        JP: "<a href='https://docs.google.com/presentation/d/1U7-Vgv6UA2_EFdvw3m8BI-5-9T91WeKTflDuR7rEx-U/edit#slide=id.g24320c31e9_0_67' target='_blank'>??????????????????????????????</a>",
                        EN: "<a href='https://docs.google.com/presentation/d/1U7-Vgv6UA2_EFdvw3m8BI-5-9T91WeKTflDuR7rEx-U/edit#slide=id.g24320c31e9_0_67' target='_blank'>Read Me First</a>",
                        FR: "<a href='https://docs.google.com/presentation/d/1U7-Vgv6UA2_EFdvw3m8BI-5-9T91WeKTflDuR7rEx-U/edit#slide=id.g24320c31e9_0_67' target='_blank'>Lisez moi en premier</a>",
                        DE: "<a href='https://docs.google.com/presentation/d/1U7-Vgv6UA2_EFdvw3m8BI-5-9T91WeKTflDuR7rEx-U/edit#slide=id.g24320c31e9_0_67' target='_blank'>Erst alles genau durchlesen, dann Einstellungen vornehmen!</a>",
                        CN: "<a href='https://docs.google.com/presentation/d/1U7-Vgv6UA2_EFdvw3m8BI-5-9T91WeKTflDuR7rEx-U/edit#slide=id.g24320c31e9_0_67' target='_blank'>????????????????????????</a>",
                    },
                    i: "person",
                    e: "li_2line_checkbox_normal",
                    ul: 0
                },
                hideName: {
                    tt: {
                        KR: "?????? ?????????",
                        JP: "???????????????",
                        EN: "Hide the Name",
                        FR: "Cacher le nom",
                        DE: "Namen ausblenden",
                        CN: "????????????",
                    },
                    i: "visibility_off",
                    e: "li_checkbox",
                    ul: 0
                }
            }
        },
        tab_mhh: {
            tt: d.actionName,
            e: "tab_btn",
            w: 25,
            p: "Data",
            inner: {
                mhh: {
                    tt: {
                        KR: "MaxHit, MaxHeal ?????? ??????",
                        JP: "MaxHit???MaxHeal???????????????",
                        EN: "Display Type of MaxHit, MaxHeal",
                        FR: "Type d\'affichage de MaxHit, MaxHeal",
                        DE: "Anzeigetyp des MaxHit, MaxHeal",
                        CN: "MaxHit???MaxHeal ????????????",
                    },
                    m: {
                        1: {
                            KR: "????????? + ?????????",
                            JP: "?????? + ?????????",
                            EN: "Action's Name + Data",
                            FR: "Nom + valeur",
                            DE: "F??higkeitsnamen + Daten",
                            CN: "????????? + ??????",
                        },
                        2: {
                            KR: "????????? + ?????????",
                            JP: "????????? + ??????",
                            EN: "Data + Action's Name",
                            FR: "Valeur + nom",
                            DE: "Daten + F??higkeitsnamen",
                            CN: "?????? + ?????????",
                        },
                        3: d.actionName,
                        4: d.Data

                    },
                    i: "content_cut",
                    e: "li_radio",
                    p: "Data_mhh",
                    ul: 1
                },
                mhh_unit: {
                    tt: {
                        KR: "MaxHit, MaxHeal ?????? ??????",
                        JP: "MaxHit???MaxHeal???????????????",
                        EN: "Separator of MaxHit, MaxHeal",
                        FR: "S??parateur de MaxHit, MaxHeal",
                        DE: "Trennzeichen von MaxHit, MaxHeal",
                        CN: "MaxHit???MaxHeal ?????????",
                    },
                    m: {
                        '-': {
                            KR: "-",
                            JP: "-",
                            EN: "-",
                            FR: "-",
                            DE: "-",
                            CN: "-",
                        },
                        '/': {
                            KR: "/",
                            JP: "/",
                            EN: "/",
                            FR: "/",
                            DE: "/",
                            CN: "/",
                        },
                        '???': {
                            KR: "???",
                            JP: "???",
                            EN: "???",
                            FR: "???",
                            DE: "???",
                            CN: "???",
                        },
                        '???': {
                            KR: "???",
                            JP: "???",
                            EN: "???",
                            FR: "???",
                            DE: "???",
                            CN: "???",
                        }
                    },
                    i: "space_bar",
                    e: "li_radio",
                    p: "Data_mhh",
                    ul: 0
                },
                abb: {
                    tt: {
                        KR: "????????? ???????????? ??????",
                        JP: "????????????????????????",
                        EN: "Display Abbreviate Action\'s Name",
                        FR: "Afficher le nom de l\'action abr??g??e",
                        DE: "Zeige abgek??rzte F??higkeitsnamen",
                        CN: "?????????????????????",
                    },
                    i: "short_text",
                    e: "li_checkbox",
                    ul: 0
                },
                abbset: {
                    tt: {
                        KR: "????????? ????????? ??????",
                        JP: "????????????????????????",
                        EN: "Action\'s Name Abbreviations Settings",
                        FR: "Param??tres des noms d\'actions abr??g??s",
                        DE: "Einstellungen der abgek??rzten F??higkeitsnamen",
                        CN: "?????????????????????",
                    },
                    i: "insert_comment",
                    e: "li_link",
                    ul: 0
                }
            }
        }
    },
    format: {
        tab_DPS: {
            tt: d.dpsTable,
            e: "tab_btn",
            w: 50,
            p: "format",
            inner: {
                DPSfilter: {
                    tt: d.jobFilter,
                    dr: {
                        DPS_T: {
                            tt: d.filter_tank
                        },
                        DPS_H: {
                            tt: d.filter_healer
                        },
                        DPS_D: {
                            tt: d.filter_DPS
                        },
                        DPS_M: {
                            tt: d.filter_CL
                        },
                        DPS_C: {
                            tt: d.filter_cbo
                        }
                    },
                    i: "filter_list",
                    e: "li_2line_empty",
                    p: "format_DPS",
                    ul: 1
                },
                Class: d.Class,
                name: d.name,
                duration: d.duration,
                dps: d.dps,
                EncounterDuration: d.EncounterDuration,
                encdps: d.encdps,
                mergedLast10DPS: d.mergedLast10DPS,
                mergedLast30DPS: d.mergedLast30DPS,
                mergedLast60DPS: d.mergedLast60DPS,
                mergedLast180DPS: d.mergedLast180DPS,
                damagePct: d.damagePct,
                mergedDamage: d.mergedDamage,
                mergedSwings: d.mergedSwings,
                mergedHits: d.mergedHits,
                mergedMisses: d.mergedMisses,
                hitfailed: d.hitfailed,
                tohit: d.tohit,
                mergedDirectHitCount: d.mergedDirectHitCount,
                DirectHitPct: d.DirectHitPct,
                mergedCrithits: d.mergedCrithits,
                crithitPct: d.crithitPct,
                mergedCritDirectHitCount: d.mergedCritDirectHitCount,
                CritDirectHitPct: d.CritDirectHitPct,
                maxhit: d.maxhit,
                enchps: d.enchps,
                healedPct: d.healedPct,
                mergedHealed: d.mergedHealed,
                mergedEffHealed: d.mergedEffHealed,
                mergedDamageShield: d.mergedDamageShield,
                mergedOverHeal: d.mergedOverHeal,
                overHealPct: d.overHealPct,
                mergedHeals: d.mergedHeals,
                mergedCritheals: d.mergedCritheals,
                crithealPct: d.crithealPct,
                maxheal: d.maxheal,
                mergedDamagetaken: d.mergedDamagetaken,
                mergedHealstaken: d.mergedHealstaken,
                mergedAbsorbHeal: d.mergedAbsorbHeal,
                powerheal: d.powerheal,
                ParryPct: d.ParryPct,
                BlockPct: d.BlockPct,
                mergedCures: d.mergedCures,
                deaths: d.deaths
            }
        },
        tab_HPS: {
            tt: d.hpsTable,
            e: "tab_btn",
            w: 50,
            p: "format",
            inner: {
                HPSfilter: {
                    tt: d.jobFilter,
                    dr: {
                        HPS_T: {
                            tt: d.filter_tank
                        },
                        HPS_H: {
                            tt: d.filter_healer
                        },
                        HPS_D: {
                            tt: d.filter_DPS
                        },
                        HPS_M: {
                            tt: d.filter_CL
                        },
                        HPS_C: {
                            tt: d.filter_cbo
                        }
                    },
                    i: "filter_list",
                    e: "li_2line_empty",
                    p: "format_HPS",
                    ul: 1
                },
                Class: d.Class,
                name: d.name,
                duration: d.duration,
                dps: d.dps,
                EncounterDuration: d.EncounterDuration,
                encdps: d.encdps,
                mergedLast10DPS: d.mergedLast10DPS,
                mergedLast30DPS: d.mergedLast30DPS,
                mergedLast60DPS: d.mergedLast60DPS,
                mergedLast180DPS: d.mergedLast180DPS,
                damagePct: d.damagePct,
                mergedDamage: d.mergedDamage,
                mergedSwings: d.mergedSwings,
                mergedHits: d.mergedHits,
                mergedMisses: d.mergedMisses,
                hitfailed: d.hitfailed,
                tohit: d.tohit,
                mergedDirectHitCount: d.mergedDirectHitCount,
                DirectHitPct: d.DirectHitPct,
                mergedCrithits: d.mergedCrithits,
                crithitPct: d.crithitPct,
                mergedCritDirectHitCount: d.mergedCritDirectHitCount,
                CritDirectHitPct: d.CritDirectHitPct,
                maxhit: d.maxhit,
                enchps: d.enchps,
                healedPct: d.healedPct,
                mergedHealed: d.mergedHealed,
                mergedEffHealed: d.mergedEffHealed,
                mergedDamageShield: d.mergedDamageShield,
                mergedOverHeal: d.mergedOverHeal,
                overHealPct: d.overHealPct,
                mergedHeals: d.mergedHeals,
                mergedCritheals: d.mergedCritheals,
                crithealPct: d.crithealPct,
                maxheal: d.maxheal,
                mergedDamagetaken: d.mergedDamagetaken,
                mergedHealstaken: d.mergedHealstaken,
                mergedAbsorbHeal: d.mergedAbsorbHeal,
                powerheal: d.powerheal,
                ParryPct: d.ParryPct,
                BlockPct: d.BlockPct,
                mergedCures: d.mergedCures,
                deaths: d.deaths
            }
        }
    },
    order: {
        tab_DPS: {
            tt: d.dpsTable,
            e: "tab_btn",
            w: 50,
            p: "order",
        },
        tab_HPS: {
            tt: d.hpsTable,
            e: "tab_btn",
            w: 50,
            p: "order",
        }
    },
    abbset: {
        caution: {
            tt: d.caution_tt,
            m: d.caution_m1,
            i: "priority_high",
            e: "li_box",
            ul: 1
        },
        in_abbOld: {
            m: {
                KR: "????????? (???????????? ??????)",
                JP: "??????",
                EN: "Action\'s name (Make sure you marked spacing!)",
                FR: "Nom de l\'action (Assurez vous d'avoir mis un espace !)",
                DE: "F??higkeitsnamen (Achte auf Leerzeichen!)",
                CN: "????????????????????????????????????",
            },
            i: "looks_one",
            e: "li_text",
            ul: 1
        },
        in_abbNew: {
            m: {
                KR: "?????????",
                JP: "??????",
                EN: "Abbreviation",
                FR: "Abbr??viation",
                DE: "Abk??rzung",
                CN: "??????",
            },
            i: "looks_two",
            e: "li_text",
            ul: 0
        },
        submit: {
            tt: {
                KR: "??????",
                JP: "??????",
                EN: "Add to List",
                FR: "Ajouter ?? la liste",
                DE: "Hinzuf??gen",
                CN: "??????",
            },
            e: "li_full_btn",
            ul: 0
        }
    },
    Design: {
        font: {
            tt: {
                KR: "??????",
                JP: "????????????",
                EN: "Font",
                FR: "Police",
                DE: "Schrift",
                CN: "??????",
            },
            i: "text_format",
            e: "li_link",
            ul: 1
        },
        color: {
            tt: {
                KR: "???",
                JP: "???",
                EN: "Color",
                FR: "Couleur",
                DE: "Farbe",
                CN: "??????",
            },
            i: "colorize",
            e: "li_link",
            ul: 1
        },
        opacity: {
            tt: {
                KR: "????????????",
                JP: "????????????",
                EN: "Opacity",
                FR: "Opacit??",
                DE: "Deckkraft",
                CN: "????????????",
            },
            i: "opacity",
            e: "li_link",
            ul: 0
        },
        size: {
            tt: {
                KR: "??????",
                JP: "?????????",
                EN: "Size",
                FR: "Taille",
                DE: "Gr????e",
                CN: "??????",
            },
            i: "straighten",
            e: "li_link",
            ul: 0
        },
        cells: {
            tt: {
                KR: "???",
                JP: "??????",
                EN: "Cell",
                FR: "Cellule",
                DE: "Zellen",
                CN: "?????????",
            },
            i: "tune",
            e: "li_link",
            ul: 0
        },
        shape: {
            tt: {
                KR: "?????????",
                JP: "????????????",
                EN: "Corner",
                FR: "Coin",
                DE: "Ecken",
                CN: "??????",
            },
            i: "rounded_corner",
            e: "li_link",
            ul: 0
        },
        raid: {
            tt: {
                KR: "????????? ??????",
                JP: "??????????????????",
                EN: "Raid Mode",
                FR: "Mode Raid",
                DE: "Raid Modus",
                CN: "Raid??????",
            },
            i: "grid_on",
            e: "li_link",
            ul: 1
        },
        advanced: {
            tt: {
                KR: "?????? ??????",
                JP: "???????????????",
                EN: "Advanced",
                FR: "Avanc??",
                DE: "Erweiterte Einstellungen",
                CN: "??????",
            },
            i: "pan_tool",
            e: "li_link",
            ul: 1
        }
    },
    font: {
        caution: {
            tt: d.caution_tt,
            m: d.caution_m2,
            i: "priority_high",
            e: "li_box",
            ul: 1
        },
        fTime: {
            tt: {
                KR: "??????<font class='ex'> ??? ????????? ??? DS-Digital</font>",
                JP: "??????<font class='ex'> ??? ????????? ??? DS-Digital</font>",
                EN: "Time<font class='ex'> ??? Default ??? DS-Digital</font>",
                FR: "Temps<font class='ex'> ??? Default ??? DS-Digital</font>",
                DE: "Zeit<font class='ex'> ??? Voreinstellung ??? DS-Digital</font>",
                CN: "??????<font class='ex'> ??? ????????? > DS-Digital</font>",
            },
            e: 'li_pn',
            ul: 1
        },
        in_fTime: d.input_font,
        fTarget: {
            tt: {
                KR: "??????<font class='ex'> ??? ????????? ??? Segoe UI</font>",
                JP: "???????????????<font class='ex'> ??? ????????? ??? Segoe UI</font>",
                EN: "Target<font class='ex'> ??? Default ??? Segoe UI</font>",
                FR: "Cible<font class='ex'> ??? Default ??? Segoe UI</font>",
                DE: "Ziel<font class='ex'> ??? Voreinstellung ??? Segoe UI</font>",
                CN: "??????<font class='ex'> ??? ????????? > ????????????</font>",
            },
            e: 'li_pn',
            ul: 1
        },
        in_fTarget: d.input_font,
        fRPS: {
            tt: {
                KR: "?????????<font class='ex'> ??? ????????? ??? Roboto Condensed</font>",
                JP: "?????????<font class='ex'> ??? ????????? ??? Roboto Condensed</font>",
                EN: "Data<font class='ex'> ??? Default ??? Roboto Condensed</font>",
                FR: "Donn??es<font class='ex'> ??? Default ??? Roboto Condensed</font>",
                DE: "Daten<font class='ex'> ??? Voreinstellung ??? Roboto Condensed</font>",
                CN: "??????<font class='ex'> ??? ????????? ??? Georgia</font>",
            },
            e: 'li_pn',
            ul: 1
        },
        in_fRPS: d.input_font,
        fHd: {
            tt: {
                KR: "????????? ??????<font class='ex'> ??? ????????? ??? Roboto Condensed</font>",
                JP: "???????????????????????????<font class='ex'> ??? ????????? ??? Roboto Condensed</font>",
                EN: "Table Header<font class='ex'> ??? Default ??? Roboto Condensed</font>",
                FR: "Ent??te tableau<font class='ex'> ??? Default ??? Roboto Condensed</font>",
                DE: "Tabellenkopf<font class='ex'> ??? Voreinstellung ??? Roboto Condensed</font>",
                CN: "??????<font class='ex'> ??? ????????? > Georgia</font>",
            },
            e: 'li_pn',
            ul: 1
        },
        in_fHd: d.input_font,
        fBody: {
            tt: {
                KR: "????????? ??????<font class='ex'> ??? ????????? ??? Segoe UI</font>",
                JP: "????????????????????????<font class='ex'> ??? ????????? ??? Segoe UI</font>",
                EN: "Table Body<font class='ex'> ??? Default ??? Segoe UI</font>",
                FR: "Corps tableau<font class='ex'> ??? Default ??? Segoe UI</font>",
                DE: "Tabellenk??rper<font class='ex'> ??? Voreinstellung ??? Segoe UI</font>",
                CN: "??????<font class='ex'> ??? ????????? > ????????????</font>",
            },
            e: 'li_pn',
            ul: 1
        },
        in_fBody: d.input_font
    },
    color: {
        tab_nav: {
            tt: d.nav,
            e: "tab_btn",
            w: 33.3,
            p: "color",
            inner: {
                navBg: {
                    tt: d.navBg,
                    i: "format_color_fill",
                    e: "li_color",
                    ul: 1
                },
                pattern: {
                    tt: d.pattern,
                    i: "border_color",
                    e: "li_color",
                    ul: 0
                },
                edge: {
                    tt: d.edge,
                    i: "border_color",
                    e: "li_color",
                    ul: 0
                },
                accent: {
                    tt: {
                        KR: "??????, ?????????<font class='ex'> ??? ?????????</font>",
                        JP: "??????, ????????????<font class='ex'> ??? ?????????</font>",
                        EN: "Time, Icon<font class='ex'> ??? Accent Color</font>",
                        FR: "Temps, Ic??ne<font class='ex'> ??? Couleur d\'accent</font>",
                        DE: "Zeit, Symbole<font class='ex'> ??? Farb Akzent</font>",
                        CN: "???????????????<font class='ex'> ??? ?????????</font>",
                    },
                    i: "highlight",
                    e: "li_color",
                    ul: 1
                },
                target: {
                    tt: d.target,
                    i: "format_color_text",
                    e: "li_color",
                    ul: 0
                },
                rps: {
                    tt: d.rps,
                    i: "format_color_text",
                    e: "li_color",
                    ul: 0
                }
            }
        },
        tab_table: {
            tt: d.table,
            e: "tab_btn",
            w: 33.4,
            p: "color",
            inner: {
                tableHd: {
                    tt: d.header,
                    i: "format_color_fill",
                    e: "li_color",
                    ul: 1
                },
                tableHdText: {
                    tt: d.headerText,
                    i: "format_color_text",
                    e: "li_color",
                    ul: 0
                },
                tableBg: {
                    tt: d.body,
                    i: "format_color_fill",
                    e: "li_color",
                    ul: 1
                },
                iconSet: {
                    tt: d.jobIcon,
                    m: {
                        glow: {
                            KR: "?????????",
                            JP: "??????",
                            EN: "Glow",
                            FR: "Brillant",
                            DE: "Leuchten",
                            CN: "??????",
                        },
                        antique: {
                            KR: "??????",
                            JP: "??????????????????",
                            EN: "Antique",
                            FR: "Antique",
                            DE: "Antik",
                            CN: "??????",
                        },
                        frame: {
                            KR: "?????????",
                            JP: "????????????",
                            EN: "Frame",
                            FR: "Cadre",
                            DE: "Rahmen",
                            CN: "???",
                        },
                        gear: {
                            KR: "??????",
                            JP: "??????",
                            EN: "Gear",
                            FR: "Equipement",
                            DE: "Zahnrad",
                            CN: "??????",
                        },
                        black: {
                            KR: "?????????",
                            JP: "????????????????????????",
                            EN: "Jet Black",
                            FR: "Noir de jais",
                            DE: "Rabenschwarzer",
                            CN: "?????????",
                        },
                        gold: {
                            KR: "???????????? ??????",
                            JP: "????????????????????????",
                            EN: "Metallic Gold",
                            FR: "Or m??tallique",
                            DE: "Metallic goldener",
                            CN: "?????????",
                        },
                        silver: {
                            KR: "???????????? ??????",
                            JP: "????????????????????????",
                            EN: "Metallic Silver",
                            FR: "Argent m??tallique",
                            DE: "Metallic silberner",
                            CN: "?????????",
                        },
                        red: {
                            KR: "???????????????",
                            JP: "?????????????????????",
                            EN: "Dalamud Red",
                            FR: "Rouge Dalamud",
                            DE: "Dalamudroter Farbe",
                            CN: "?????????",
                        },
                        orange: {
                            KR: "?????????",
                            JP: "???????????????????????????",
                            EN: "Sunset Orange",
                            FR: "Lueur Orange",
                            DE: "Abendroter",
                            CN: "?????????",
                        },
                        green: {
                            KR: "?????????",
                            JP: "?????????????????????",
                            EN: "Lime Green",
                            FR: "Vert Citron",
                            DE: "Limettengr??ner",
                            CN: "?????????",
                        },
                        blue: {
                            KR: "????????? ?????????",
                            JP: "?????????????????????",
                            EN: "Othard Blue",
                            FR: "Bleu Othard",
                            DE: "Othardblauer",
                            CN: "?????????",
                        },
                        purple: {
                            KR: "?????????",
                            JP: "????????????????????????",
                            EN: "Grape Purple",
                            FR: "Violet Raisin",
                            DE: "Weintraubenvioletter",
                            CN: "?????????",
                        }
                    },
                    i: "mood",
                    e: "li_radio",
                    p: "color_table",
                    ul: 0,
                },
                tableYOU: {
                    tt: {
                        KR: "??????, ??????<font class='ex'> ??? ??? ?????????</font>",
                        JP: "???????????????<font class='ex'> ??? ???????????????????????????</font>",
                        EN: "Name, Number<font class='ex'> ??? My Character</font>",
                        FR: "Nom, Nombre<font class='ex'> ??? Mon personnage</font>",
                        DE: "Namen, Zahlen<font class='ex'> ??? Eigenen Charakter</font>",
                        CN: "???????????????<font class='ex'> ??? ????????????</font>",
                    },
                    i: "format_color_text",
                    e: "li_color",
                    ul: 1
                },
                tableExYOU: {
                    tt: {
                        KR: "??????, ?????????<font class='ex'> ??? ??? ?????????</font>",
                        JP: "???????????????<font class='ex'> ??? ???????????????????????????</font>",
                        EN: "Unit, Action's Name<font class='ex'> ??? My Character</font>",
                        FR: "Unit??, Nom d'action<font class='ex'> ??? Mon personnage</font>",
                        DE: "Unit, F??higkeitsnamen<font class='ex'> ??? Eigenen Charakter</font>",
                        CN: "??????????????????<font class='ex'> ??? ????????????</font>",
                    },
                    i: "format_color_text",
                    e: "li_color",
                    ul: 0
                },
                tableBorderYOU: {
                    tt: {
                        KR: "?????? ?????????<font class='ex'> ??? ??? ?????????</font>",
                        JP: "?????????????????????<font class='ex'> ??? ???????????????????????????</font>",
                        EN: "Text Border<font class='ex'> ??? My Character</font>",
                        FR: "Bordure texte<font class='ex'> ??? Mon personnage</font>",
                        DE: "Text Border<font class='ex'> ??? Eigener Charakter</font>",
                        CN: "????????????<font class='ex'> ??? ????????????</font>",
                    },
                    i: "border_color",
                    e: "li_color",
                    ul: 0
                },
                tableOther: {
                    tt: {
                        KR: "??????, ??????<font class='ex'> ??? ??? ?????????</font>",
                        JP: "???????????????<font class='ex'> ??? ????????????????????????</font>",
                        EN: "Name, Number<font class='ex'> ??? Other Character</font>",
                        FR: "Nom, Nombre<font class='ex'> ??? Autre personnage</font>",
                        DE: "Namen, Zahlen<font class='ex'> ??? Andere Charaktere</font>",
                        CN: "???????????????<font class='ex'> ??? ????????????</font>",
                    },
                    i: "format_color_text",
                    e: "li_color",
                    ul: 1
                },
                tableExOther: {
                    tt: {
                        KR: "??????, ?????????<font class='ex'> ??? ??? ?????????</font>",
                        JP: "???????????????<font class='ex'> ??? ????????????????????????</font>",
                        EN: "Unit, Action's Name<font class='ex'> ??? Other Character</font>",
                        FR: "Unit??, Nom d'action<font class='ex'> ??? Autre personnage</font>",
                        DE: "Unit, F??higkeitsnamen<font class='ex'> ??? Andere Charaktere</font>",
                        CN: "??????????????????<font class='ex'> ??? ????????????</font>",
                    },
                    i: "format_color_text",
                    e: "li_color",
                    ul: 0
                },
                tableBorderOther: {
                    tt: {
                        KR: "?????? ?????????<font class='ex'> ??? ??? ?????????</font>",
                        JP: "?????????????????????<font class='ex'> ??? ????????????????????????</font>",
                        EN: "Text Border<font class='ex'> ??? Other Character</font>",
                        FR: "Bordure texte<font class='ex'> ??? Autre personnage</font>",
                        DE: "Text Border<font class='ex'> ??? Andere Charaktere</font>",
                        CN: "????????????<font class='ex'> ??? ????????????</font>",
                    },
                    i: "border_color",
                    e: "li_color",
                    ul: 0
                },
                tableLine: {
                    tt: d.line_ho,
                    i: "border_color",
                    e: "li_color",
                    ul: 1
                },
                tableLineVer: {
                    tt: d.line_ve,
                    i: "border_color",
                    e: "li_color",
                    ul: 0
                }
            }
        },
        tab_graph: {
            tt: d.graph,
            e: "tab_btn",
            w: 33.3,
            p: "color"
        }
    },
    Graph: {
        job: {
            palette: d.palette,
            myColorUse: d.myColorUse,
            myColor: d.myColor,
            PLD: {
                tt: {
                    KR: "????????? & ?????????",
                    JP: "????????? & ?????????",
                    EN: "Paladin & Gladiator",
                    FR: "Paladin & Gladiateur",
                    DE: "Paladin & Gladiator",
                    CN: "?????? & ?????????",
                },
                i: "<img src='./images/icon/frame/PLD.png'/>",
                e: "li_color",
                ul: 1
            },
            WAR: {
                tt: {
                    KR: "?????? & ????????????",
                    JP: "?????? & ?????????",
                    EN: "Warrior & Marauder",
                    FR: "Guerrier & Maraudeur",
                    DE: "Krieger & Marodeur",
                    CN: "?????? & ?????????",
                },
                i: "<img src='./images/icon/frame/WAR.png'/>",
                e: "li_color",
                ul: 0
            },
            DRK: {
                tt: {
                    KR: "????????????",
                    JP: "????????????",
                    EN: "Dark Knight",
                    FR: "Chevalier Noir",
                    DE: "Dunkelritter",
                    CN: "????????????",
                },
                i: "<img src='./images/icon/frame/DRK.png'/>",
                e: "li_color",
                ul: 0
            },
            GNB: {
                tt: {
                    KR: "???????????????",
                    JP: "?????????????????????",
                    EN: "Gunbreaker",
                    FR: "PistoSabreur",
                    DE: "Revolverklinge",
                    CN: "????????????",
                },
                i: "<img src='./images/icon/frame/GNB.png'/>",
                e: "li_color",
                ul: 0
            },
            WHM: {
                tt: {
                    KR: "???????????? & ?????????",
                    JP: "???????????? & ?????????",
                    EN: "White Mage & Conjurer",
                    FR: "Mage blanc & El??mentaliste",
                    DE: "Wei??magier & Druide",
                    CN: "???????????? & ?????????",
                },
                i: "<img src='./images/icon/frame/WHM.png'/>",
                e: "li_color",
                ul: 1
            },
            SCH: {
                tt: {
                    KR: "??????",
                    JP: "??????",
                    EN: "Scholar",
                    FR: "Erudit",
                    DE: "Gelehrter",
                    CN: "??????",
                },
                i: "<img src='./images/icon/frame/SCH.png'/>",
                e: "li_color",
                ul: 0
            },
            AST: {
                tt: {
                    KR: "????????????",
                    JP: "????????????",
                    EN: "Astrologian",
                    FR: "Astromancien",
                    DE: "Astrologe",
                    CN: "????????????",
                },
                i: "<img src='./images/icon/frame/AST.png'/>",
                e: "li_color",
                ul: 0
            },
            SGE: {
                tt: {
                    KR: "??????",
                    JP: "??????",
                    EN: "Sage",
                    FR: "Sage",
                    DE: "Weise",
                    CN: "??????",
                },
                i: "<img src='./images/icon/frame/SGE.png'/>",
                e: "li_color",
                ul: 0
            },
            MNK: {
                tt: {
                    KR: "?????? & ?????????",
                    JP: "????????? & ?????????",
                    EN: "Monk & Pugilist",
                    FR: "Moine & Pugiliste",
                    DE: "M??nch & Faustk??mpfer",
                    CN: "?????? & ?????????",
                },
                i: "<img src='./images/icon/frame/MNK.png'/>",
                e: "li_color",
                ul: 1
            },
            DRG: {
                tt: {
                    KR: "????????? & ?????????",
                    JP: "????????? & ?????????",
                    EN: "Dragoon & Lancer",
                    FR: "Dragon & Ma??tre d\'hast",
                    DE: "Dragoon & Pikenier",
                    CN: "????????? & ?????????"
                },
                i: "<img src='./images/icon/frame/DRG.png'/>",
                e: "li_color",
                ul: 0
            },
            NIN: {
                tt: {
                    KR: "?????? & ?????????",
                    JP: "?????? & ?????????",
                    EN: "Ninja & Rogue",
                    FR: "Ninja & Voleur",
                    DE: "Ninja & Schurke",
                    CN: "?????? & ?????????",
                },
                i: "<img src='./images/icon/frame/NIN.png'/>",
                e: "li_color",
                ul: 0
            },
            SAM: {
                tt: {
                    KR: "????????????",
                    JP: "???",
                    EN: "Samurai",
                    FR: "Samurai",
                    DE: "Samurai",
                    CN: "??????",
                },
                i: "<img src='./images/icon/frame/SAM.png'/>",
                e: "li_color",
                ul: 0
            },
            RPR: {
                tt: {
                    KR: "??????",
                    JP: "????????????",
                    EN: "Reaper",
                    FR: "Faucheur",
                    DE: "Schnitter",
                    CN: "?????????",
                },
                i: "<img src='./images/icon/frame/RPR.png'/>",
                e: "li_color",
                ul: 0
            },
            BRD: {
                tt: {
                    KR: "???????????? & ?????????",
                    JP: "???????????? & ?????????",
                    EN: "Bard & Archer",
                    FR: "Barde & Archer",
                    DE: "Barde & Waldl??ufer",
                    CN: "???????????? & ?????????"
                },
                i: "<img src='./images/icon/frame/BRD.png'/>",
                e: "li_color",
                ul: 1
            },
            MCH: {
                tt: {
                    KR: "?????????",
                    JP: "?????????",
                    EN: "Machinist",
                    FR: "Machiniste",
                    DE: "Maschinist",
                    CN: "?????????"
                },
                i: "<img src='./images/icon/frame/MCH.png'/>",
                e: "li_color",
                ul: 0
            },
            DNC: {
                tt: {
                    KR: "?????????",
                    JP: "????????? ",
                    EN: "Dancer",
                    FR: "Danseur",
                    DE: "T??nzer",
                    CN: "??????"
                },
                i: "<img src='./images/icon/frame/DNC.png'/>",
                e: "li_color",
                ul: 0
            },
            BLM: {
                tt: {
                    KR: "???????????? & ?????????",
                    JP: "???????????? & ?????????",
                    EN: "Black Mage & Thaumaturge",
                    FR: "Mage noir & Occuliste",
                    DE: "Schwarzmagier & Thaumaturg",
                    CN: "???????????? & ?????????",
                },
                i: "<img src='./images/icon/frame/BLM.png'/>",
                e: "li_color",
                ul: 1
            },
            SMN: {
                tt: {
                    KR: "????????? & ?????????",
                    JP: "????????? & ?????????",
                    EN: "Summoner & Arcanist",
                    FR: "Invocateur & Arcaniste",
                    DE: "Beschw??rer & Hermetiker",
                    CN: "????????? & ?????????",
                },
                i: "<img src='./images/icon/frame/SMN.png'/>",
                e: "li_color",
                ul: 0
            },
            RDM: {
                tt: {
                    KR: "????????????",
                    JP: "????????????",
                    EN: "Red Mage",
                    FR: "Mage rouge",
                    DE: "Rotmagier",
                    CN: "????????????",
                },
                i: "<img src='./images/icon/frame/RDM.png'/>",
                e: "li_color",
                ul: 0
            },
            BLU: {
                tt: {
                    KR: "????????????",
                    JP: "????????????",
                    EN: "Blue Mage",
                    FR: "Mage bleu",
                    DE: "Blaumagier",
                    CN: "????????????",
                },
                i: "<img src='./images/icon/frame/BLU.png'/>",
                e: "li_color",
                ul: 0
            },
            pet: {
                tt: d.graph_pet,
                i: "<img src='./images/icon/frame/AVA.png'/>",
                e: "li_color",
                ul: 1
            },
            ds: {
                tt: d.graph_shield,
                i: "<img src='./images/menu/Healer.png'/>",
                e: "li_color",
                ul: 0
            },
            oh: {
                tt: d.graph_overheal,
                i: "<img src='./images/menu/Healer.png'/>",
                e: "li_color",
                ul: 0
            },
            CBO: d.CBO,
            LMB: d.LMB,
            CRP: {
                tt: {
                    KR: "??????",
                    JP: "?????????",
                    EN: "Carpenter",
                    FR: "Menuisier",
                    DE: "Zimmerer",
                    CN: "?????????",
                },
                i: "<img src='./images/icon/frame/CRP.png'/>",
                e: "li_color",
                ul: 1
            },
            BSM: {
                tt: {
                    KR: "????????????",
                    JP: "?????????",
                    EN: "Blacksmith",
                    FR: "Forgeron",
                    DE: "Grobschmied",
                    CN: "?????????",
                },
                i: "<img src='./images/icon/frame/BSM.png'/>",
                e: "li_color",
                ul: 0
            },
            ARM: {
                tt: {
                    KR: "???????????????",
                    JP: "?????????",
                    EN: "Armorer",
                    FR: "Armurier",
                    DE: "Plattner",
                    CN: "?????????",
                },
                i: "<img src='./images/icon/frame/ARM.png'/>",
                e: "li_color",
                ul: 0
            },
            GSM: {
                tt: {
                    KR: "???????????????",
                    JP: "?????????",
                    EN: "Goldsmith",
                    FR: "Orf??vre",
                    DE: "Goldschmied",
                    CN: "?????????",
                },
                i: "<img src='./images/icon/frame/GSM.png'/>",
                e: "li_color",
                ul: 0
            },
            LTW: {
                tt: {
                    KR: "???????????????",
                    JP: "????????????",
                    EN: "Leatherworker",
                    FR: "Tanneur",
                    DE: "Gerber",
                    CN: "?????????",
                },
                i: "<img src='./images/icon/frame/LTW.png'/>",
                e: "li_color",
                ul: 0
            },
            WVR: {
                tt: {
                    KR: "?????????",
                    JP: "?????????",
                    EN: "Weaver",
                    FR: "Couturier",
                    DE: "Weber",
                    CN: "?????????",
                },
                i: "<img src='./images/icon/frame/WVR.png'/>",
                e: "li_color",
                ul: 0
            },
            ALC: {
                tt: {
                    KR: "????????????",
                    JP: "????????????",
                    EN: "Alchemist",
                    FR: "Alchimiste",
                    DE: "Alchemist",
                    CN: "????????????",
                },
                i: "<img src='./images/icon/frame/ALC.png'/>",
                e: "li_color",
                ul: 0
            },
            CUL: {
                tt: {
                    KR: "?????????",
                    JP: "?????????",
                    EN: "Culinarian",
                    FR: "Cuisinier",
                    DE: "Gourmet",
                    CN: "?????????",
                },
                i: "<img src='./images/icon/frame/CUL.png'/>",
                e: "li_color",
                ul: 0
            },
            MIN: {
                tt: {
                    KR: "??????",
                    JP: "?????????",
                    EN: "Miner",
                    FR: "Mineur",
                    DE: "Minenarbeiter",
                    CN: "?????????",
                },
                i: "<img src='./images/icon/frame/MIN.png'/>",
                e: "li_color",
                ul: 1
            },
            BTN: {
                tt: {
                    KR: "?????????",
                    JP: "?????????",
                    EN: "Botanist",
                    FR: "Botaniste",
                    DE: "G??rtner",
                    CN: "?????????",
                },
                i: "<img src='./images/icon/frame/BTN.png'/>",
                e: "li_color",
                ul: 0
            },
            FSH: {
                tt: {
                    KR: "??????",
                    JP: "??????",
                    EN: "Fisher",
                    FR: "P??cheur",
                    DE: "Fischer",
                    CN: "?????????",
                },
                i: "<img src='./images/icon/frame/FSH.png'/>",
                e: "li_color",
                ul: 0
            }
        },
        role: {
            palette: d.palette,
            myColorUse: d.myColorUse,
            myColor: d.myColor,
            Tanker: {
                tt: d.filter_tank,
                i: "<img src='./images/menu/Tanker.png'/>",
                e: "li_color",
                ul: 1,
            },
            Healer: {
                tt: d.filter_healer,
                i: "<img src='./images/menu/Healer.png'/>",
                e: "li_color",
                ul: 0,
            },
            DPS: {
                tt: d.filter_DPS,
                i: "<img src='./images/menu/DPS.png'/>",
                e: "li_color",
                ul: 0,
            },
            pet: {
                tt: d.graph_pet,
                i: "<img src='./images/icon/frame/AVA.png'/>",
                e: "li_color",
                ul: 1,
            },
            ds: {
                tt: d.graph_shield,
                i: "<img src='./images/menu/Healer.png'/>",
                e: "li_color",
                ul: 0
            },
            oh: {
                tt: d.graph_overheal,
                i: "<img src='./images/menu/Healer.png'/>",
                e: "li_color",
                ul: 0
            },
            CBO: d.CBO,
            LMB: d.LMB,
            Crafter: {
                tt: {
                    KR: "?????????",
                    JP: "???????????????",
                    EN: "Disciples of the Hand",
                    FR: "Disciples de la Main",
                    DE: "Handwerker",
                    CN: "????????????",
                },
                i: "<img src='./images/icon/frame/CRP.png'/>",
                e: "li_color",
                ul: 1,
            },
            Gathering: {
                tt: {
                    KR: "?????????",
                    JP: "???????????????",
                    EN: "Disciples of the Land",
                    FR: "Disciple de la Terre",
                    DE: "Sammler",
                    CN: "????????????",
                },
                i: "<img src='./images/icon/frame/BTN.png'/>",
                e: "li_color",
                ul: 0,
            }
        },
        meYou: {
            palette: d.palette,
            YOU: {
                tt: d.myColor.tt,
                i: "person",
                e: "li_color",
                ul: 1
            },
            Other: {
                tt: {
                    KR: "??? ?????????",
                    JP: "????????????????????????",
                    EN: "Other Character",
                    FR: "Autre personnage",
                    DE: "Andere Charaktere",
                    CN: "????????????",
                },
                i: "people",
                e: "li_color",
                ul: 0
            },
            pet: {
                tt: d.graph_pet,
                i: "<img src='./images/icon/frame/AVA.png'/>",
                e: "li_color",
                ul: 1
            },
            ds: {
                tt: d.graph_shield,
                i: "<img src='./images/menu/Healer.png'/>",
                e: "li_color",
                ul: 0
            },
            oh: {
                tt: d.graph_overheal,
                i: "<img src='./images/menu/Healer.png'/>",
                e: "li_color",
                ul: 0
            },
            CBO: d.CBO,
            LMB: d.LMB
        }
    },
    opacity: {
        tab_nav: {
            tt: d.nav,
            e: "tab_btn",
            w: 33.3,
            p: "opacity",
            inner: {
                navBg: {
                    tt: d.navBg,
                    min: 1,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 1
                },
                pattern: {
                    tt: d.pattern,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 0
                },
                edge: {
                    tt: d.edge,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 0
                },
                navTime: {
                    tt: d.time,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 1
                },
                navIcon: {
                    tt: d.icon,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 0
                },
                target: {
                    tt: d.target,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 0
                },
                rps: {
                    tt: d.rps,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 0
                }
            }
        },
        tab_table: {
            tt: d.table,
            e: "tab_btn",
            w: 33.4,
            p: "opacity",
            inner: {
                tableHd: {
                    tt: d.header,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 1
                },
                tableHdText: {
                    tt: d.headerText,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 0
                },
                tableBg: {
                    tt: d.body,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 1
                },
                tableYOU: {
                    tt: {
                        KR: "?????????, ??????<font class='ex'> ??? ??? ?????????</font>",
                        JP: "???????????????????????????<font class='ex'> ??? ???????????????????????????</font>",
                        EN: "Icon, Text<font class='ex'> ??? My Character</font>",
                        FR: "Ic??ne, Texte<font class='ex'> ??? Mon personnage</font>",
                        DE: "Symbole, Text<font class='ex'> ??? Eigenen Charakter</font>",
                        CN: "???????????????<font class='ex'> ??? ????????????</font>",
                    },
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 0
                },
                tableOther: {
                    tt: {
                        KR: "?????????, ??????<font class='ex'> ??? ??? ?????????</font>",
                        JP: "???????????????????????????<font class='ex'> ??? ????????????????????????</font>",
                        EN: "Icon, Text<font class='ex'> ??? Other Character</font>",
                        FR: "Ic??ne, Texte<font class='ex'> ??? Autre personnage</font>",
                        DE: "Symbole, Text<font class='ex'> ??? Andere Charaktere</font>",
                        CN: "???????????????<font class='ex'> ??? ????????????</font>",
                    },
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 0
                },
                tableLine: {
                    tt: d.line_ho,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 1
                },
                tableLineVer: {
                    tt: d.line_ve,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 0
                }
            }
        },
        tab_graph: {
            tt: d.graph,
            e: "tab_btn",
            w: 33.3,
            p: "opacity",
            inner: {
                bar: {
                    tt: d.graph_user,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 1
                },
                pet: {
                    tt: d.graph_pet,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 1
                },
                ds: {
                    tt: d.graph_shield,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 0
                },
                oh: {
                    tt: d.graph_overheal,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 0
                }
            }
        }
    },
    size: {
        tab_nav: {
            tt: d.nav,
            e: "tab_btn",
            w: 33.3,
            p: "size",
            inner: {
                sizeNav: {
                    tt: d.navBg,
                    min: 10,
                    max: 100,
                    i: "swap_vert",
                    e: "li_slider",
                    ul: 1
                },
                sizePattern: {
                    tt: d.pattern,
                    min: 2,
                    max: 50,
                    i: "texture",
                    e: "li_slider",
                    ul: 0
                },
                sizeEdge: {
                    tt: d.edge,
                    min: 0,
                    max: 10,
                    i: "border_outer",
                    e: "li_slider",
                    ul: 0
                },
                sizeTime: {
                    tt: d.time,
                    min: 8,
                    max: 100,
                    i: "format_size",
                    e: "li_slider",
                    ul: 1
                },
                sizeIcon: {
                    tt: d.icon,
                    min: 8,
                    max: 100,
                    i: "more_vert",
                    e: "li_slider",
                    ul: 0
                },
                sizeTarget: {
                    tt: d.target,
                    min: 8,
                    max: 50,
                    i: "format_size",
                    e: "li_slider",
                    ul: 0
                },
                sizeRPS: {
                    tt: d.rps,
                    min: 8,
                    max: 50,
                    i: "format_size",
                    e: "li_slider",
                    ul: 0
                },
                sizeGap: {
                    tt: {
                        KR: "??? ??????",
                        JP: "??????",
                        EN: "Line Spacing",
                        FR: "Interligne",
                        DE: "Zeilenabstand",
                        CN: "??????",
                    },
                    min: 0,
                    max: 100,
                    i: "format_line_spacing",
                    e: "li_slider",
                    ul: 0
                }
            }
        },
        tab_table: {
            tt: d.table,
            e: "tab_btn",
            w: 33.4,
            p: "size",
            inner: {
                sizeHd: {
                    tt: {
                        KR: "??????<font class='ex'> ??? ?????? >= ?????? ??????</font>",
                        JP: "????????????<font class='ex'> ??? ???????????? >= ????????????????????????</font>",
                        EN: "Header<font class='ex'> ??? Header >= Header Text</font>",
                        FR: "Ent??te<font class='ex'> ??? Ent??te >= Texte ent??te</font>",
                        DE: "Kopf<font class='ex'> ??? Header >= ??berschrift</font>",
                        CN: "??????<font class='ex'> ??? ?????? >= ????????????</font>",
                    },
                    min: 0,
                    max: 50,
                    i: "swap_vert",
                    e: "li_slider",
                    ul: 1
                },
                sizeHdText: {
                    tt: d.headerText,
                    min: 0,
                    max: 50,
                    i: "format_size",
                    e: "li_slider",
                    ul: 0
                },
                sizeBody: {
                    tt: d.body,
                    min: 8,
                    max: 50,
                    i: "swap_vert",
                    e: "li_slider",
                    ul: 1
                },
                sizeBodyIcon: {
                    tt: d.jobIcon,
                    min: 8,
                    max: 50,
                    i: "mood",
                    e: "li_slider",
                    ul: 0
                },
                sizeBodyText: {
                    tt: {
                        KR: "?????? ??????",
                        JP: "????????????????????????",
                        EN: "Body Text",
                        FR: "Corps de texte",
                        DE: "Text im Hauptteil",
                        CN: "????????????",
                    },
                    min: 8,
                    max: 50,
                    i: "format_size",
                    e: "li_slider",
                    ul: 0
                },
                sizeLine: {
                    tt: d.line_ho,
                    min: 0,
                    max: 10,
                    i: "border_bottom",
                    e: "li_slider",
                    ul: 1
                },
                sizeLineVer: {
                    tt: d.line_ve,
                    min: 0,
                    max: 10,
                    i: "border_bottom",
                    e: "li_slider",
                    ul: 0
                },
                sizeHdGap: {
                    tt: {
                        KR: "?????? ??????",
                        JP: "??????????????????",
                        EN: "Spacing of Header",
                        FR: "Espacement de l\'ent??te",
                        DE: "Abstand der Kopfzeile",
                        CN: "????????????",
                    },
                    min: 0,
                    max: 100,
                    i: "format_line_spacing",
                    e: "li_slider",
                    ul: 1
                },
                sizeDPSGap: {
                    tt: {
                        KR: "DPS ????????? ??????",
                        JP: "DPS??????????????????",
                        EN: "Spacing of DPS Table",
                        FR: "Espacement du tableau DPS",
                        DE: "Abstand der DPS Tabelle",
                        CN: "DPS?????????",
                    },
                    min: 0,
                    max: 100,
                    i: "format_line_spacing",
                    e: "li_slider",
                    ul: 0
                },
                sizeHPSGap: {
                    tt: {
                        KR: "HPS ????????? ??????",
                        JP: "HPS??????????????????",
                        EN: "Spacing of HPS Table",
                        FR: "Espacement du tableau HPS",
                        DE: "Abstand der HPS Tabelle",
                        CN: "HPS?????????",
                    },
                    min: 0,
                    max: 100,
                    i: "format_line_spacing",
                    e: "li_slider",
                    ul: 0
                },
                sizeDPSTable: {
                    tt: {
                        KR: "DPS ????????? ??? ??????<font class='ex'> ??? ????????? ?????? ??????</font>",
                        JP: "DPS??????????????????<font class='ex'> ??? ???????????????????????????</font>",
                        EN: "Number of Rows in DPS Table<font class='ex'> ??? Adjust Scroll Area</font>",
                        FR: "Nombre de colonnes dans le tableau DPS<font class='ex'> ??? Ajuster zone de d??filement</font>",
                        DE: "Anzahl der Zeilen in der DPS Tabelle<font class='ex'> ??? Adjust Scroll Area</font>",
                        CN: "DPS?????????<font class='ex'> ??? ??????????????????</font>",
                    },
                    min: 1,
                    max: 25,
                    i: "group",
                    e: "li_slider",
                    ul: 1
                },
                sizeHPSTable: {
                    tt: {
                        KR: "HPS ????????? ??? ??????<font class='ex'> ??? ????????? ?????? ??????</font>",
                        JP: "HPS??????????????????<font class='ex'> ??? ???????????????????????????</font>",
                        EN: "Number of Rows in HPS Table<font class='ex'> ??? Adjust Scroll Area</font>",
                        FR: "Nombre de colonnes dans le tableau HPS<font class='ex'> ??? Ajuster zone de d??filement</font>",
                        DE: "Anzahl der Zeilen in der HPS Tabelle<font class='ex'> ??? Adjust Scroll Area</font>",
                        CN: "HPS?????????<font class='ex'> ??? ??????????????????</font>",
                    },
                    min: 1,
                    max: 25,
                    i: "group",
                    e: "li_slider",
                    ul: 0
                }
            }
        },
        tab_graph: {
            tt: d.graph,
            e: "tab_btn",
            w: 33.3,
            p: "size",
            inner: {
                sizeGraph_bar: {
                    tt: d.graph_user,
                    min: 1,
                    max: 100,
                    i: "equalizer",
                    e: "li_slider",
                    ul: 1
                },
                sizeGraph_pet: {
                    tt: d.graph_pet,
                    min: 1,
                    max: 100,
                    i: "equalizer",
                    e: "li_slider",
                    ul: 1
                },
                sizeGraph_ds: {
                    tt: d.graph_shield,
                    min: 1,
                    max: 100,
                    i: "equalizer",
                    e: "li_slider",
                    ul: 0
                },
                sizeGraph_oh: {
                    tt: d.graph_overheal,
                    min: 1,
                    max: 100,
                    i: "equalizer",
                    e: "li_slider",
                    ul: 0
                }
            }
        }
    },
    cells: {
        tab_title: {
            tt: d.headerText,
            e: "tab_btn",
            w: 25,
            p: "cells",
            inner: {
                caution: {
                    tt: d.caution_tt,
                    m: d.caution_m1,
                    i: "priority_high",
                    e: "li_box",
                    ul: 1
                },
            }
        },
        tab_width: {
            tt: {
                KR: "??????",
                JP: "???",
                EN: "Width",
                FR: "Largeur",
                DE: "Breite",
                CN: "???",
            },
            e: "tab_btn",
            w: 25,
            p: "cells"
        },
        tab_padding: {
            tt: {
                KR: "??????",
                JP: "????????????",
                EN: "Margin",
                FR: "Marge",
                DE: "Rand",
                CN: "??????",
            },
            e: "tab_btn",
            w: 25,
            p: "cells"
        },
        tab_align: {
            tt: {
                KR: "??????",
                JP: "??????",
                EN: "Align",
                FR: "Align??",
                DE: "Ausrichten",
                CN: "??????",
            },
            e: "tab_btn",
            w: 25,
            p: "cells"
        }
    },
    shape: {
        tab_nav: {
            tt: d.nav,
            e: "tab_btn",
            w: 33.3,
            p: "shape",
            inner: {
                sizeRadius: d.radius,
                rd_navTL: d.TL,
                rd_navTR: d.TR,
                rd_navBL: d.BL,
                rd_navBR: d.BR
            }
        },
        tab_table: {
            tt: d.table,
            e: "tab_btn",
            w: 33.4,
            p: "shape",
            inner: {
                applyScope: {
                    tt: {
                        KR: "??????",
                        JP: "???????????????",
                        EN: "Coverage",
                        FR: "Couverture",
                        DE: "Abdeckung",
                        CN: "??????",
                    },
                    m: {
                        1: d.header,
                        2: d.body,
                        3: d.table
                    },
                    i: "flip",
                    e: "li_radio",
                    p: "shape_table",
                    ul: 1
                },
                sizeRadiusTable: d.radius,
                rd_tableTL: d.TL,
                rd_tableTR: d.TR,
                rd_tableBL: d.BL,
                rd_tableBR: d.BR
            }
        },
        tab_graph: {
            tt: d.graph,
            e: "tab_btn",
            w: 33.3,
            p: "shape",
            inner: {
                sizeRadiusGraph: d.radius,
                rd_graphTL: d.TL,
                rd_graphTR: d.TR,
                rd_graphBL: d.BL,
                rd_graphBR: d.BR
            }
        }
    },
    advanced: {
        tab_nav: {
            tt: d.nav,
            e: "tab_btn",
            w: 33.3,
            p: "advanced",
            inner: {
                pattern: {
                    tt: {
                        KR: "?????? ??????",
                        JP: "??????????????????",
                        EN: "Background Pattern",
                        FR: "Mod??le d\'arri??re plan",
                        DE: "Hintergrundmuster",
                        CN: "?????????",
                    },
                    m: {
                        "noUse": d.noUse,
                        "cross": {
                            KR: "?????? ??????",
                            JP: "?????????",
                            EN: "Cross Stripes",
                            FR: "Hachures en croix",
                            DE: "Kreuzstreifen",
                            CN: "?????????",
                        },
                        "hStripe": {
                            KR: "?????? ?????????",
                            JP: "??????????????????",
                            EN: "Horizontal Stripes",
                            FR: "Hachures horizontales",
                            DE: "Horizontale Streifen",
                            CN: "??????",
                        },
                        "vStripe": {
                            KR: "?????? ?????????",
                            JP: "??????????????????",
                            EN: "Vertical Stripes",
                            FR: "Hachures verticales",
                            DE: "Vertikale Streifen",
                            CN: "??????",
                        },
                        "leftDig": {
                            KR: "?????? ?????? (????????? ??? ?????????)",
                            JP: "????????????????????? (?????? ??? ??????)",
                            EN: "Diagonal Stripes (Top-Left ??? Bottom-Right)",
                            FR: "Hachures diagonales (Haut-Gauche ??? Bas-Droite)",
                            DE: "Diagonale Streifen (Oben-Links ??? Unten-Rechts)",
                            CN: "??????????????? > ?????????",
                        },
                        "rightDig": {
                            KR: "?????? ?????? (????????? ??? ?????????)",
                            JP: "????????????????????? (?????? ??? ??????)",
                            EN: "Diagonal Stripes (Top-Right ??? Bottom-Left)",
                            FR: "Hachures diagonales (Haut-Droite ??? Bas-Gauche)",
                            DE: "Diagonale Streifen (Oben-Rechts ??? Unten-Links)",
                            CN: "??????????????? > ?????????",
                        }
                    },
                    e: "li_radio",
                    i: "texture",
                    p: "advanced_nav",
                    ul: 1
                },
                edgeType: {
                    tt: {
                        KR: "????????? ??????",
                        JP: "???????????????",
                        EN: "Type of Border",
                        FR: "Type de bordure",
                        DE: "Randtyp",
                        CN: "????????????",
                    },
                    m: {
                        "solid": {
                            KR: "??????",
                            JP: "??????",
                            EN: "Solid Line",
                            FR: "Ligne continue",
                            DE: "Durchgehende Linie",
                            CN: "??????",
                        },
                        "dashed": {
                            KR: "??? ??????",
                            JP: "?????????",
                            EN: "Dashed Line",
                            FR: "Ligne tiret",
                            DE: "Gestrichelte Linie",
                            CN: "??????",
                        },
                        "dotted": {
                            KR: "?????? ??????",
                            JP: "?????????",
                            EN: "Dotted Line",
                            FR: "Ligne pointill??e",
                            DE: "Gepunktete Linie",
                            CN: "??????",
                        },
                        "double": {
                            KR: "??????",
                            JP: "?????????",
                            EN: "Double Line",
                            FR: "Double ligne",
                            DE: "Doppelte Linie",
                            CN: "?????????",
                        },
                        "ridge": {
                            KR: "?????????",
                            JP: "?????????",
                            EN: "Ridge Line",
                            FR: "Zigzag",
                            DE: "Durchgezogene Linie",
                            CN: "?????????",
                        }
                    },
                    e: "li_radio",
                    i: "line_style",
                    p: "advanced_nav",
                    ul: 0
                },
                btn_Capture: {
                    tt: {
                        KR: "?????? ?????? ??????",
                        JP: "?????????????????????????????????",
                        EN: "Fixed of Capture Button",
                        FR: "Bouton Capture fixe",
                        DE: "Zeige den Screenshot-Button immer",
                        CN: "??????????????????",
                    },
                    e: "li_checkbox",
                    i: "camera",
                    ul: 1
                },
                btn_History: {
                    tt: {
                        KR: "???????????? ?????? ??????",
                        JP: "??????????????????????????????",
                        EN: "Fixed of History Button",
                        FR: "Bouton Historique fixe",
                        DE: "Zeige den Historie-Button immer",
                        CN: "??????????????????",
                    },
                    e: "li_checkbox",
                    i: "history",
                    ul: 0
                },
                btn_RequestEnd: {
                    tt: {
                        KR: "?????? ?????? ?????? ?????? ??????",
                        JP: "???????????????????????????????????????",
                        EN: "Fixed of End-Encounter Button",
                        FR: "Bouton de fin de combat fixe",
                        DE: "Zeige den Stopp Button immer",
                        CN: "????????????????????????",
                    },
                    e: "li_checkbox",
                    i: "timer_off",
                    ul: 0
                },
                btn_YOU: {
                    tt: {
                        KR: 'YOU',
                     JP: 'YOU',
                     EN: 'YOU',
                     FR: 'YOU',
                     DE: 'YOU',
                     CN: "?????????YOU",
                    },
                    e: "li_checkbox",
                    i: "timer_off",
                    ul: 0
                },
                act: {
                    tt: {
                        KR: "?????? ????????? ?????? ??????",
                        JP: "?????????????????????????????????",
                        EN: "Display Type of Combatant Data",
                        FR: "Affichage Donn??es Type de combatant",
                        DE: "Anzeige der allgemeinen Kampfdaten",
                        CN: "????????????????????????",
                    },
                    m: {
                        1: {
                            KR: "1???",
                            JP: "1???",
                            EN: "1 Line",
                            FR: "Sur une ligne",
                            DE: "alles auf einer Linie",
                            CN: "1???",
                        },
                        2: {
                            KR: "2???",
                            JP: "2???",
                            EN: "2 Lines",
                            FR: "2 lignes",
                            DE: "2 Linien",
                            CN: "2???",
                        }
                    },
                    e: "li_radio",
                    i: "network_check",
                    p: "advanced_nav",
                    ul: 1
                },
                act_rd: {
                    tt: {
                        KR: "Total DPS",
                        JP: "Total DPS",
                        EN: "Total DPS",
                        FR: "Total DPS",
                        DE: "Total DPS",
                        CN: "Total DPS",
                    },
                    e: "li_checkbox",
                    i: "looks_one",
                    ul: 1
                },
                act_rh: {
                    tt: {
                        KR: "Total HPS",
                        JP: "Total HPS",
                        EN: "Total HPS",
                        FR: "Total HPS",
                        DE: "Total HPS",
                        CN: "Total HPS",
                    },
                    e: "li_checkbox",
                    i: "looks_two",
                    ul: 0
                },
                act_md: {
                    tt: {
                        KR: "My DPS",
                        JP: "My DPS",
                        EN: "My DPS",
                        FR: "My DPS",
                        DE: "My DPS",
                        CN: "My DPS",
                    },
                    e: "li_checkbox",
                    i: "looks_3",
                    ul: 0
                },
                act_mh: {
                    tt: {
                        KR: "My HPS",
                        JP: "My HPS",
                        EN: "My HPS",
                        FR: "My HPS",
                        HE: "My HPS",
                        CN: "My HPS",
                    },
                    e: "li_checkbox",
                    i: "looks_4",
                    ul: 0
                },
                act_rank: {
                    tt: {
                        KR: "Rank<font class='ex'> ??? DPS ?????? / HPS ?????? / ??? ?????????</font>",
                        JP: "Rank<font class='ex'> ??? DPS?????? / HPS?????? / ?????????</font>",
                        EN: "Rank<font class='ex'> ??? DPS Ranking / HPS Ranking / The total number of combatants</font>",
                        FR: "Rang<font class='ex'> ??? Rang DPS / Rang HPS / Nombre total de combatant</font>",
                        DE: "Rank<font class='ex'> ??? DPS Rang / HPS Rang / Anzahl der Teilnehmer</font>",
                        CN: "Rank<font class='ex'> ??? DPS ?????? / HPS ?????? / ?????????</font>",
                    },
                    e: "li_checkbox",
                    i: "looks_5",
                    ul: 0
                },
                act_max: {
                    tt: {
                        KR: "MaxHit, MaxHeal<font class='ex'> ??? ??? ?????????</font>",
                        JP: "MaxHit???MaxHeal<font class='ex'> ??? ???????????????????????????</font>",
                        EN: "MaxHit, MaxHeal<font class='ex'> ??? My Character</font>",
                        FR: "MaxHit, MaxHeal<font class='ex'> ??? Mon personnage</font>",
                        DE: "MaxHit, MaxHeal<font class='ex'> ??? Eigenen Charakter</font>",
                        CN: "MaxHit???MaxHeal<font class='ex'> ??? ????????????</font>",
                    },
                    e: "li_checkbox",
                    i: "looks_6",
                    ul: 0
                },
                time_italic: {
                    tt: {
                        KR: "?????? ?????????<font class='ex'> ??? ??????</font>",
                        JP: "??????????????????<font class='ex'> ??? ??????</font>",
                        EN: "Italic<font class='ex'> ??? Time</font>",
                        FR: "Italique<font class='ex'> ??? Temps</font>",
                        DE: "Kursiv<font class='ex'> ??? Zeit</font>",
                        CN: "??????<font class='ex'> ??? ??????</font>",
                    },
                    e: "li_checkbox",
                    i: "format_italic",
                    ul: 1
                },
                target_italic: {
                    tt: {
                        KR: "?????? ?????????<font class='ex'> ??? ??????</font>",
                        JP: "??????????????????<font class='ex'> ??? ???????????????</font>",
                        EN: "Italic<font class='ex'> ??? Target</font>",
                        FR: "Italique<font class='ex'> ??? Cible</font>",
                        DE: "Kursiv<font class='ex'> ??? Ziel</font>",
                        CN: "??????<font class='ex'> ??? ??????</font>",
                    },
                    e: "li_checkbox",
                    i: "format_italic",
                    ul: 0
                },
                rps_italic: {
                    tt: {
                        KR: "?????? ?????????<font class='ex'> ??? ?????????</font>",
                        JP: "??????????????????<font class='ex'> ??? ?????????</font>",
                        EN: "Italic<font class='ex'> ??? Data</font>",
                        FR: "Italique<font class='ex'> ??? Donn??es</font>",
                        DE: "Kursiv<font class='ex'> ??? Daten</font>",
                        CN: "??????<font class='ex'> ??? ??????</font>",
                    },
                    e: "li_checkbox",
                    i: "format_italic",
                    ul: 0
                }
            }
        },
        tab_table: {
            tt: d.table,
            e: "tab_btn",
            w: 33.4,
            p: "advanced",
            inner: {
                tableOrder: {
                    tt: {
                        KR: "????????? ??????<font class='ex'> ??? ?????? ??? ????????? ??????</font>",
                        JP: "??????????????????<font class='ex'> ??? ????????? ??? ??????????????????</font>",
                        EN: "Order of Table<font class='ex'> ??? Size ??? Spacing of Table</font>",
                        FR: "Tri du tableau<font class='ex'> ??? Taille ??? Espacement du Tableau</font>",
                        DE: "Reihenfolge der Tabellen<font class='ex'> ??? Size ??? Spacing of Table</font>",
                        CN: "?????????<font class='ex'> ??? ?????? > ?????????</font>",
                    },
                    m: {
                        1: {
                            KR: "DPS ????????? ??? HPS ?????????",
                            JP: "DPS???????????? ??? HPS????????????",
                            EN: "DPS Table ??? HPS Table",
                            FR: "Tableau DPS ??? Tableau HPS",
                            DE: "DPS Tabellen ??? HPS Tabellen",
                            CN: "DPS ??? > HPS ???",
                        },
                        2: {
                            KR: "HPS ????????? ??? DPS ?????????",
                            JP: "HPS???????????? ??? DPS????????????",
                            EN: "HPS Table ??? DPS Table",
                            FR: "Tableau HPS ??? Tableau DPS",
                            DE: "HPS Tabellen ??? DPS Tabellen",
                            CN: "HPS ??? > DPS ???",
                        }
                    },
                    e: "li_radio",
                    i: "swap_vert",
                    p: "advanced_table",
                    ul: 1
                },
                viewDPS: {
                    tt: d.dpsTable,
                    e: "li_checkbox",
                    i: "grid_on",
                    ul: 1
                },
                viewHPS: {
                    tt: d.hpsTable,
                    e: "li_checkbox",
                    i: "grid_on",
                    ul: 0
                },
                boldYOU: {
                    tt: {
                        KR: "?????? ??????<font class='ex'> ??? ??? ?????????</font>",
                        JP: "??????<font class='ex'> ??? ???????????????????????????</font>",
                        EN: "Bold lettering<font class='ex'> ??? My Character</font>",
                        FR: "Gras<font class='ex'> ??? Mon personnage</font>",
                        DE: "Fette Buchstaben<font class='ex'> ??? Eigenen Charakter</font>",
                        CN: "??????<font class='ex'> ??? ????????????</font>",
                    },
                    e: "li_checkbox",
                    i: "format_bold",
                    ul: 1
                },
                boldOther: {
                    tt: {
                        KR: "?????? ??????<font class='ex'> ??? ??? ?????????</font>",
                        JP: "??????<font class='ex'> ??? ????????????????????????</font>",
                        EN: "Bold lettering<font class='ex'> ??? Other Character</font>",
                        FR: "Gras<font class='ex'> ??? Autre personnage personnage</font>",
                        DE: "Fette Buchstaben<font class='ex'> ??? Andere Charaktere</font>",
                        CN: "??????<font class='ex'> ??? ????????????</font>",
                    },
                    e: "li_checkbox",
                    i: "format_bold",
                    ul: 0
                },
                header_italic: {
                    tt: {
                        KR: "?????? ?????????<font class='ex'> ??? ??????</font>",
                        JP: "??????????????????<font class='ex'> ??? ????????????</font>",
                        EN: "Italic<font class='ex'> ??? Header</font>",
                        FR: "Italique<font class='ex'> ??? Ent??te</font>",
                        DE: "Kursiv<font class='ex'> ??? Kopf</font>",
                        CN: "??????<font class='ex'> ??? ??????</font>",
                    },
                    e: "li_checkbox",
                    i: "format_italic",
                    ul: 1
                },
                body_italic: {
                    tt: {
                        KR: "?????? ?????????<font class='ex'> ??? ??????</font>",
                        JP: "??????????????????<font class='ex'> ??? ?????????</font>",
                        EN: "Italic<font class='ex'> ??? Body</font>",
                        FR: "Italique<font class='ex'> ??? Corps</font>",
                        DE: "Kursiv<font class='ex'> ??? K??rper</font>",
                        CN: "??????<font class='ex'> ??? ??????</font>",
                    },
                    e: "li_checkbox",
                    i: "format_italic",
                    ul: 0
                },
                borderTextType: {
                    tt: {
                        KR: "?????? ????????? ??????",
                        JP: "??????????????????????????????",
                        EN: "Type of Text Border",
                        FR: "Type de bordure de texte",
                        DE: "Typ des Textrahmes",
                        CN: "??????????????????",
                    },
                    m: {
                        shadow: {
                            KR: "?????????",
                            JP: "???",
                            EN: "Shadow",
                            FR: "Ombr??",
                            DE: "Schatten",
                            CN: "??????",
                        },
                        outline: {
                            KR: "?????????",
                            JP: "??????????????????",
                            EN: "Outline",
                            FR: "Ext??rieur",
                            DE: "Umriss",
                            CN: "??????",
                        }
                    },
                    e: "li_radio",
                    i: "swap_vert",
                    p: "advanced_table",
                    ul: 1
                },
            }
        },
        tab_graph: {
            tt: d.graph,
            e: "tab_btn",
            w: 33.3,
            p: "advanced",
            inner: {
                bar_pet: {
                    tt: d.graph_pet,
                    e: "li_checkbox",
                    i: "insert_chart_outlined",
                    ul: 1
                },
                bar_ds: {
                    tt: d.graph_shield,
                    e: "li_checkbox",
                    i: "insert_chart_outlined",
                    ul: 0
                },
                bar_oh: {
                    tt: d.graph_overheal,
                    e: "li_checkbox",
                    i: "insert_chart_outlined",
                    ul: 0
                },
                ani: {
                    tt: {
                        KR: "??????????????? ??????",
                        JP: "???????????????????????????",
                        EN: "Animated Transition Effect",
                        FR: "Transitions anim??es",
                        DE: "Weicher, Animierter ??bergang",
                        CN: "????????????",
                    },
                    e: "li_checkbox",
                    i: "waves",
                    ul: 1
                },
                gradient: {
                    tt: {
                        KR: "??????????????? ??????",
                        JP: "???????????????????????????",
                        EN: "Gradient Effect",
                        FR: "Effet gradient",
                        DE: "Gradient Effekt",
                        CN: "????????????",
                    },
                    e: "li_checkbox",
                    i: "gradient",
                    ul: 1
                },
                direction: {
                    tt: {
                        KR: "??????????????? ??????",
                        JP: "???????????????????????????",
                        EN: "Gradient Direction",
                        FR: "Direction du gradient",
                        DE: "Gradient Richtung",
                        CN: "????????????",
                    },
                    m: {
                        top: {
                            KR: "????????????",
                            JP: "????????????",
                            EN: "to Top",
                            FR: "vers le haut",
                            DE: "nach Oben",
                            CN: "??????",
                        },
                        bottom: {
                            KR: "???????????????",
                            JP: "????????????",
                            EN: "to Bottom",
                            FR: "vers le bas",
                            DE: "nach Unten",
                            CN: "??????",
                        },
                        left: {
                            KR: "????????????",
                            JP: "????????????",
                            EN: "to Left",
                            FR: "vers la gauche",
                            DE: "nach Links",
                            CN: "??????",
                        },
                        right: {
                            KR: "???????????????",
                            JP: "????????????",
                            EN: "to Right",
                            FR: "vers la droite",
                            DE: "nach Rechts",
                            CN: "??????",
                        }
                    },
                    e: "li_radio",
                    i: "gradient",
                    p: "advanced_graph",
                    ul: 0
                },
                bar_position_DPS: {
                    tt: {
                        KR: "DPS ????????? ??????",
                        JP: "DPS???????????????",
                        EN: "DPS Graph Align",
                        FR: "Alignement graphique DPS",
                        DE: "DPS Graph ausrichtung",
                        CN: "DPS ????????????",
                    },
                    m: {
                        left: d.direction.left,
                        right: d.direction.right
                    },
                    e: "li_radio",
                    i: "format_align_center",
                    p: "advanced_graph",
                    ul: 1
                },
                bar_position: {
                    tt: {
                        KR: "HPS ????????? ??????",
                        JP: "HPS???????????????",
                        EN: "HPS Graph Align",
                        FR: "Alignement graphique HPS",
                        DE: "HPS Graph ausrichtung",
                        CN: "HPS ????????????",
                    },
                    m: {
                        left: d.direction.left,
                        right: d.direction.right
                    },
                    e: "li_radio",
                    i: "format_align_center",
                    p: "advanced_graph",
                    ul: 0
                }
            }
        },
    },
    raid: {
        tab_general: {
            tt: d.general,
            e: "tab_btn",
            w: 25,
            p: "raid",
            inner: {
                view24_Number: {
                    tt: {
                        KR: "????????? ??????",
                        JP: "??????????????????",
                        EN: "Raid Mode",
                        FR: "Mode Raid",
                        DE: "Raid Modus",
                        CN: "Raid??????",
                    },
                    msg: {
                        KR: "???????????? ?????? ????????? ??? ???????????? ????????? ??????",
                        JP: "???????????????????????????????????????????????????????????????",
                        EN: "Display the table simply when there are ??? or more combatants.",
                        FR: "Affiche le tableau simplifi?? quand il y a ??? ou plus combatants",
                        DE: "Automatische Anpassung der Graphen, falls die Anzahl der K??mpfer > ??? betr??gt.",
                        CN: "?????????????????????????????????????????????",
                    },
                    m: {
                        1: {
                            KR: "1",
                            JP: "1",
                            EN: "1",
                            FR: "1",
                            DE: "1",
                            CN: "1",
                        },
                        6: {
                            KR: "6",
                            JP: "6",
                            EN: "6",
                            FR: "6",
                            DE: "6",
                            CN: "6",
                        },
                        10: {
                            KR: "10",
                            JP: "10",
                            EN: "10",
                            FR: "10",
                            DE: "10",
                            CN: "10",
                        }
                    },
                    e: "li_radio_change",
                    i: "grid_on",
                    p: "raid_general",
                    ul: 1
                },
            }
        },
        tab_color: {
            tt: {
                KR: "???",
                JP: "???",
                EN: "Color",
                FR: "Couleur",
                DE: "Farbe",
                CN: "??????",
            },
            e: "tab_btn",
            w: 25,
            p: "raid",
            inner: {
                view24BgYOU: {
                    tt: d.bodyYOU,
                    i: "format_color_fill",
                    e: "li_color",
                    ul: 1
                },
                view24TableYOU: {
                    tt: {
                        KR: "??????<font class='ex'> ??? ??? ?????????</font>",
                        JP: "????????????<font class='ex'> ??? ???????????????????????????</font>",
                        EN: "Text<font class='ex'> ??? My Character</font>",
                        FR: "Texte<font class='ex'> ??? Mon personnage</font>",
                        DE: "Text<font class='ex'> ??? Eigenen Charakter</font>",
                        CN: "??????<font class='ex'> ??? ????????????</font>"
                    },
                    i: "format_color_text",
                    e: "li_color",
                    ul: 0
                },
                view24BgOther: {
                    tt: d.bodyOther,
                    i: "format_color_fill",
                    e: "li_color",
                    ul: 1
                },
                view24TableOther: {
                    tt: {
                        KR: "??????<font class='ex'> ??? ??? ?????????</font>",
                        JP: "????????????<font class='ex'> ??? ????????????????????????</font>",
                        EN: "Text<font class='ex'> ??? Other Character</font>",
                        FR: "Texte<font class='ex'> ??? Autre personnage</font>",
                        DE: "Text<font class='ex'> ??? Andere Charaktere</font>",
                        CN: "??????<font class='ex'> ??? ????????????</font>"
                    },
                    i: "format_color_text",
                    e: "li_color",
                    ul: 0
                }
            }
        },
        tab_opacity: {
            tt: {
                KR: "????????????",
                JP: "????????????",
                EN: "Opacity",
                FR: "Opacit??",
                DE: "Deckkraft",
                CN: "?????????",
            },
            e: "tab_btn",
            w: 25,
            p: "raid",
            inner: {
                view24BgYOU: {
                    tt: d.bodyYOU,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 1
                },
                view24TableYOU: {
                    tt: d.itYOU,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 0
                },
                view24BgOther: {
                    tt: d.bodyOther,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 1
                },
                view24TableOther: {
                    tt: d.itOther,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 0
                },
            }
        },
        tab_size: {
            tt: {
                KR: "??????",
                JP: "?????????",
                EN: "Size",
                FR: "Taille",
                DE: "Gr????e",
                CN: "??????",
            },
            e: "tab_btn",
            w: 25,
            p: "raid",
            inner: {
                size24TableSlice: {
                    tt: {
                        KR: "??? ??????",
                        JP: "????????????",
                        EN: "Split Row",
                        FR: "Couper Colonne",
                        DE: "Zeile Teilen",
                        CN: "?????????",
                    },
                    min: 1,
                    max: 25,
                    i: "view_comfy",
                    e: "li_slider",
                    ul: 1
                },
                size24TableHeight: {
                    tt: {
                        KR: "??? ??????",
                        JP: "????????????",
                        EN: "Row Height",
                        FR: "Hauteur de colonne",
                        DE: "Zeilenh??he",
                        CN: "??????",
                    },
                    min: 35,
                    max: 100,
                    i: "swap_vert",
                    e: "li_slider",
                    ul: 0
                },
                size24TableIdxWd: {
                    tt: {
                        KR: "?????????",
                        JP: "??????",
                        EN: "Index",
                        FR: "Index",
                        DE: "Index",
                        CN: "??????",
                    },
                    min: 0,
                    max: 50,
                    i: "swap_horiz",
                    e: "li_slider",
                    ul: 1
                },
                size24BodyIcon: {
                    tt: d.icon,
                    min: 8,
                    max: 50,
                    i: "mood",
                    e: "li_slider",
                    ul: 0
                },
                size24BodyNameText: {
                    tt: {
                        KR: "??????<font class='ex'> ??? ????????? ??????</font>",
                        JP: "????????????<font class='ex'> ??? ????????????</font>",
                        EN: "Text<font class='ex'> ??? The combatant\'s name.</font>",
                        FR: "Texte<font class='ex'> ??? Nom du combatant.</font>",
                        DE: "Text<font class='ex'> ??? K??mpfername.</font>",
                        CN: "??????<font class='ex'> ??? ????????????</font>",
                    },
                    min: 8,
                    max: 50,
                    i: "format_size",
                    e: "li_slider",
                    ul: 0
                },
                size24BodyDataText: {
                    tt: {
                        KR: "??????<font class='ex'> ??? ?????????</font>",
                        JP: "????????????<font class='ex'> ??? ?????????</font>",
                        EN: "Text<font class='ex'> ??? Data</font>",
                        FR: "Texte<font class='ex'> ??? Donn??es</font>",
                        DE: "Text<font class='ex'> ??? Daten</font>",
                        CN: "??????<font class='ex'> ??? ??????</font>",
                    },
                    min: 8,
                    max: 50,
                    i: "format_size",
                    e: "li_slider",
                    ul: 0
                }
            }
        },
    },
    Overlay: {
        resolution: {
            tt: {
                KR: "?????????",
                JP: "?????????",
                EN: "Resolution",
                FR: "R??solution",
                DE: "Aufl??sung",
                CN: "?????????",
            },
            m: {
                '55.5%': {
                    KR: "55.5%",
                    JP: "55.5%",
                    EN: "55.5%",
                    FR: "55.5%",
                    DE: "55.5%",
                    CN: "55.5%",
                },
                '62.5%': {
                    KR: "62.5%",
                    JP: "62.5%",
                    EN: "62.5%",
                    FR: "62.5%",
                    DE: "62.5%",
                    CN: "62.5%",
                },
                '75%': {
                    KR: "75%",
                    JP: "75%",
                    EN: "75%",
                    FR: "75%",
                    DE: "75%",
                    CN: "75%",
                },
                '100%': {
                    KR: "100%",
                    JP: "100%",
                    EN: "100%",
                    FR: "100%",
                    DE: "100%",
                    CN: "100%",
                },
                '125%': {
                    KR: "125%",
                    JP: "125%",
                    EN: "125%",
                    FR: "125%",
                    DE: "125%",
                    CN: "125%",
                },
                '150%': {
                    KR: "150%",
                    JP: "150%",
                    EN: "150%",
                    FR: "150%",
                    DE: "150%",
                    CN: "150%",
                },
                '175%': {
                    KR: "175%",
                    JP: "175%",
                    EN: "175%",
                    FR: "175%",
                    DE: "175%",
                    CN: "175%",
                },
                '200%': {
                    KR: "200%",
                    JP: "200%",
                    EN: "200%",
                    FR: "200%",
                    DE: "200%",
                    CN: "200%",
                }
            },
            i: "zoom_out_map",
            e: "li_radio",
            p: "Overlay",
            ul: 1
        },
        autoHide: {
            tt: {
                KR: "?????? ??????",
                JP: "???????????????",
                EN: "Standby Mode",
                FR: "Mode veille",
                DE: "Standby",
                CN: "????????????",
            },
            m: {
                KR: "?????? ?????? ??? ?????? ????????? ???????????? ???????????? ??????",
                JP: "?????????????????????????????????????????????????????????????????????????????????????????????",
                EN: "Hide the table after standby time of inactivity when not in combat.",
                FR: "Cacher les tableaux apr??s une p??riode d\'inactivit?? hors combat",
                DE: "Versteckt die Tabelle, wenn kein Kampf f??r Standby-Zeit stattfindet.",
                CN: "??????????????????????????????????????????",
            },
            i: "blur_on",
            e: "li_2line_checkbox_normal",
            ul: 1
        },
        autoHideTime: {
            tt: {
                KR: "?????? ??????",
                JP: "???????????????",
                EN: "Standby Time",
                FR: "Temps de mise en veille",
                DE: "Standby-Zeit",
                CN: "????????????",
            },
            min: 1,
            max: 30,
            i: "access_alarm",
            e: "li_slider",
            ul: 0
        },
        overlayBg: {
            tt: {
                KR: "?????? ?????????",
                JP: "??????????????????",
                EN: "Background Image",
                FR: "Image d\'arri??re plan",
                DE: "Hintergrundbild",
                CN: "????????????",
            },
            i: "image",
            e: "li_checkbox",
            ul: 1
        },
        inputBg: {
            tt: {
                KR: "????????????...",
                JP: "??????",
                EN: "Browse...",
                FR: "Parcourir ...",
                DE: "Durchsuchen...",
                CN: "??????",
            },
            e: "li_file",
            ul: 0
        },
        overlayBgSize: {
            tt: {
                KR: "?????? ????????? ??????",
                JP: "???????????????????????????",
                EN: "Size of Background Image",
                FR: "Taille de l\'image de fond",
                DE: "Gr????e des Hintergrundbildes",
                CN: "??????????????????",
            },
            m: {
                auto: {
                    KR: "?????? ??????",
                    JP: "??????????????????",
                    EN: "Original",
                    FR: "Original",
                    DE: "Original",
                    CN: "????????????",
                },
                contain: {
                    KR: "??? ??????",
                    JP: "?????????????????????",
                    EN: "Contain",
                    FR: "Ajust??",
                    DE: "Skaliert",
                    CN: "???????????????",
                },
                cover: {
                    KR: "?????????",
                    JP: "???????????????",
                    EN: "Cover",
                    FR: "Remplissage",
                    DE: "Ausf??llend",
                    CN: "??????",
                }
            },
            e: "li_radio",
            i: "photo_size_select_large",
            p: "Overlay",
            ul: 1
        },
        overlayBgRepeat: {
            tt: {
                KR: "?????? ????????? ??????",
                JP: "??????????????????????????????",
                EN: "Repeat of Background Image",
                FR: "R??p??ter l\'image de fond",
                DE: "Hintergrundbild wiederholen",
                CN: "??????????????????",
            },
            m: {
                'no-repeat': d.noUse,
                'repeat-x': {
                    KR: "?????????",
                    JP: "??????",
                    EN: "Horizontal Axis",
                    FR: "Axe horizontal",
                    DE: "Horizontale Achse",
                    CN: "??????",
                },
                'repeat-y': {
                    KR: "?????????",
                    JP: "??????",
                    EN: "Vertically Axis",
                    FR: "Axe vertical",
                    DE: "Vertikale Achse",
                    CN: "??????",
                },
                'repeat': {
                    KR: "???????????? ??????",
                    JP: "???????????????",
                    EN: "Tile",
                    FR: "Titre",
                    DE: "Kachel",
                    CN: "??????",
                }
            },
            e: "li_radio",
            i: "burst_mode",
            p: "Overlay",
            ul: 0
        },
        arrow: {
            tt: {
                KR: "?????? ?????? ?????????",
                JP: "????????????????????????",
                EN: "Resizing Arrow",
                FR: "Fl??che de redimensionnement",
                DE: "Pfeil zur Gr????enver??nderung des Fensters",
                CN: "??????????????????",
            },
            i: "signal_cellular_4_bar",
            e: "li_checkbox",
            ul: 1
        },
        tooltips: {
            tt: {
                KR: "??????",
                JP: "??????????????????",
                EN: "Tooltip",
                FR: "Bulle d\'aide",
                DE: "Kurzhinweise",
                CN: "?????????",
            },
            i: "textsms",
            e: "li_checkbox",
            ul: 0
        },
        toast: {
            tt: {
                KR: "????????? ?????????",
                JP: "???????????????????????????",
                EN: "Toast Message",
                FR: "Message popup",
                DE: "Pop-Up-Benachrichtigungen",
                CN: "????????????",
            },
            i: "textsms",
            e: "li_checkbox",
            ul: 0
        }
    },
    Tool: {
        init: {
            tt: {
                KR: "?????????",
                JP: "?????????",
                EN: "Reset",
                FR: "Reset",
                DE: "Zur??cksetzen",
                CN: "?????????",
            },
            m: {
                KR: '?????? ???????????? ??????',
                JP: '????????????????????????',
                EN: 'Restore to their initial settings.',
                FR: 'Restaurer les param??tres initiaux',
                DE: 'Wiederherstellen der urspr??nglichen Einstellungen.',
                CN: "?????????????????????",
            },
            i: "delete_sweep",
            e: "li_2line",
            ul: 1
        },
        refresh: {
            tt: {
                KR: "????????????",
                JP: "????????????",
                EN: "Refresh",
                FR: "Rafra??chir",
                DE: "Auffrischen",
                CN: "??????",
            },
            m: {
                KR: '??????????????? ????????? ???????????? ?????? ??? ??????',
                JP: '????????????????????????????????????????????????',
                EN: 'Recommendation when the overlay not working well.',
                FR: 'Recommandation lorsque l\'overlay ne fonctionne pas correctement.',
                DE: 'Nutze diese Option, falls das Overlay nicht richtig funktioniert.',
                CN: "Overlay??????????????????????????????",
            },
            i: "refresh",
            e: "li_2line",
            ul: 0
        },
        backup: {
            tt: {
                KR: "??????",
                JP: "??????????????????",
                EN: "Backup",
                FR: "Sauvegarder",
                DE: "Sicherung",
                CN: "??????",
            },
            i: "cloud_upload",
            e: "li_2line_empty",
            ul: 1
        },
        restore: {
            tt: {
                KR: "??????",
                JP: "??????",
                EN: "Restore",
                FR: "Restaurer",
                DE: "Wiederherstellen",
                CN: "??????",
            },
            m: {
                KR: '????????? ????????? ????????? ???????????? ?????????',
                JP: '???????????????????????????????????????????????????',
                EN: 'Restore settings to previously backed up data.',
                FR: 'Restaure les param??tres pr??alablement sauvegard??s.',
                DE: 'Restore settings to previously backed up data.',
                CN: "??????????????????????????????",
            },
            i: "cloud_download",
            e: "li_2line",
            ul: 0
        },
        custom: {
            tt: {
                KR: "????????? UI ?????????",
                JP: "????????????UI?????????",
                EN: "Custom UI Data",
                FR: "Donn??es personnalis?? de l\'interface",
                DE: "Benutzerdefinierte UI-Daten",
                CN: "?????????UI??????",
            },
            i: "folder_shared",
            e: "li_link",
            ul: 1
        }
    },
    custom: {
        caution: {
            tt: d.caution_tt,
            m: d.caution_m1,
            i: "priority_high",
            e: "li_box",
            ul: 1
        },
        share: {
            tt: {
                KR: "??????",
                JP: "??????",
                EN: "Share",
                FR: "Partager",
                DE: "Teilen",
                CN: "??????",
            },
            m: {
                KR: '?????? ????????? ??????(Ctrl+C)?????????. ?????? ????????? ???????????? ????????????.',
                JP: '??????????????????????????????Ctrl+C????????????????????????????????????????????????????????????',
                EN: 'Copy under the code (Ctrl+C). Some settings are not included.',
                FR: 'Copier le code (Ctrl+C). Certains param??tres ne sont pas inclus.',
                DE: 'Kopiere den unteren Code (Strg+C). Manche Daten sind nicht enthalten.',
                CN: "?????????Ctrl+C??????????????????????????????????????????",
            },
            i: "arrow_right",
            e: "li_pn",
            ul: 1
        },
        in_share: {
            m: {
                KR: '',
                JP: '',
                EN: '',
                FR: '',
                DE: '',
                CN: '',
            },
            i: "share",
            e: "li_text",
            ul: 0
        },
        apply: {
            tt: {
                KR: "??????",
                JP: "??????",
                EN: "Apply",
                FR: "Appliquer",
                DE: "Anwenden",
                CN: "??????",
            },
            m: {
                KR: '????????? ????????? ?????? ??????(Ctrl+V), ?????? ??? ?????? ????????? ????????????.',
                JP: '??????????????????????????????Ctrl+V????????????????????????????????????????????????????????????',
                EN: 'Paste under the code to apply (Ctrl+V), and then Press the Enter key.',
                FR: 'Coller le code (Ctrl+V) et valider avec Entr??e.',
                DE: 'F??ge den kopierten Code unten ein (Strg+V) und dr??cke die Eingabetaste.',
                CN: "???????????????Ctrl+V?????????????????????????????????",
            },
            i: "arrow_right",
            e: "li_pn",
            ul: 1
        },
        in_apply: {
            m: {
                KR: '{???:??? ??? ???:???}',
                JP: '{??????:??? ??? ??????:???}',
                EN: '{Key:Value ??? Key:Value}',
                FR: '{Cl??:Valeur ??? Cl??:Valeur}',
                DE: '{Schl??ssel:Werte ??? Schl??ssel:Werte}',
                CN: "{???:??? ??? ???:???}",
            },
            i: "code",
            e: "li_text_inbtn",
            ul: 0
        }
    },
    back: {
        Data: "Settings",
        Design: "Settings",
        Overlay: "Settings",
        Tool: "Settings",
        abbset: "Data",
        format: "Data",
        order: "Data",
        font: "Design",
        color: "Design",
        opacity: "Design",
        size: "Design",
        shape: "Design",
        cells: "Design",
        advanced: "Design",
        raid: "Design",
        custom: "Tool"
    }
}