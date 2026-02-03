# Hard-coded values in week-1/portfolio/css/styles.css
Line 1: @import "./variables.css"
Line 3: --dark-cyan: #07465c
Line 4: --light-pink: #FF5980
Line 5: --light-yellow: #D4CEB8
Line 6: --orange: #FF6E51

Line 11: url('assets/fonts/D-DIN.oft'), format('opentype')
Line 12: url('assets/fonts/D-DIN-Italic.oft'), format('opentype')
Line 13: url('assets/fonts/D-DIN-Bold.oft'), format('opentype')
Line 14: url('assets/fonts/D-DINCondensed.oft'), format('opentype')
Line 15: url('assets/fonts/D-DINCondensed-Bold.oft'), format('opentype')
Line 16: url('assets/fonts/D-DINExp-Bold.oft'), format('opentype')
Line 17: url('assets/fonts/D-DINExp-Italic.oft'), format('opentype')
Line 18: url('assets/fonts/D-DINExp.oft'), format('opentype')
Line 19: font-weight: normal
Line 20: font-style: normal

Line 40: line-height: 1.5
Line 42: -webkit-font-smoothing: antialiased
Line 43: font-family: "D-DIN", sans-serif
Line 44: background: var(--surface__primary)
Line 45: color: var(--text-primary)

Line 101: font-family: "Rubik"
Line 102: font-size: 3em
Line 103: text-shadow: -2px 3px 0px #FF5980
Line 104: font-weight: 900
Line 105: margin-bottom: 10px

Line 111: background: #02141e
Line 113: font-size: 1.75em
Line 114: font-weight: 900
Line 115: z-index: 5
Line 116: position: fixed
Line 117: width: 100%
Line 118: top: 0

Line 126: width: 20%
Line 127: max-width: 100px
Line 128: margin: 5px 10px 5px 10px
Line 132: list-style-type: none
Line 133: display: flex
Line 137: color: white
Line 138: padding: 5px 10px

Line 141: font-family: "Rubik Glitch"
Line 142: font-weight: 400
Line 143: border-radius: 13px
Line 144: background: #ef1d84
Line 145: box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)

Line 151: display: flex
Line 152: list-style: none
Line 152–153: margin-left: 2rem
Line 155: display: none
Line 158: display: none (hidden on desktop)
Line 163: display: block

Line 165: width: 30px
Line 166: height: 3px
Line 167: background-color: white
Line 169: transition: all 0.3s ease

Line 175–181: content: "", width: 30px, height: 3px, background-color: white, position: absolute, transition: all 0.3s ease
Line 185: top: -8px
Line 189: bottom: -8px

Line 193: text-align: center
Line 195: height: 100vh
Line 198: padding: 10% 2%
Line 199: background: radial-gradient(circle at bottom, var(--orange) 0, black 100%)
Line 200: z-index: -2

Line 207: margin: 0 auto
Line 210: font-size: 3.5em
Line 211: font-weight: 900
Line 212: z-index: 20

Line 217: border-right: 2px solid rgba(255,255,255,0)
Line 223: from { width: 0 }
Line 224: to { width: 90% }
Line 227: rgba(255,255,255,.75)

Line 231: font-size: 1.25em
Line 232: padding-bottom: 10px

Line 239: border-right: 2px solid rgba(255,255,255,0)
Line 241: animation: typewriter 1s steps(30) 3s 1 normal both
Line 242: blinkTextCursor 500ms steps(35) 0.5s 9
Line 250: animation: typewriter 4s steps(62) 6s 1 normal both
Line 251: blinkTextCursor 500ms steps(35) 5s 9

Line 256: background: rgba(255, 81, 122, 0.1) center / 200px 200px round
Line 266: animation: space 90s ease-in-out infinite

Line 268–273: multiple radial-gradient(...) values using var(--light-yellow)
Line 277: animation: space 120s ease-in-out infinite

Line 279–284: multiple radial-gradient(...) values using white
Line 288: animation: space 150s ease-in-out infinite

Line 290–295: multiple radial-gradient(...) values using white

Line 299: 40%
Line 300: opacity: 0.75
Line 302: 50%
Line 303: opacity: 0.25
Line 305: 60%
Line 306: opacity: 0.75
Line 309: transform: rotate(360deg)

Line 317: max-height: 600px
Line 318: background: var(--dark-cyan)
Line 320: padding: 60px auto
Line 323: clip-path: circle(40%)
Line 325: width: 100%
Line 327: max-width: 600px
Line 329: top: 10%
Line 330: z-index: 2
Line 333: display: none

Line 337: padding: 40px
Line 341: linear-gradient(35deg, ...)

Line 343–351: multiple transparent / var(--dark-cyan) percentage stops

Line 353: radial-gradient(circle at 45% 55%, ...)
Line 354: var(--light-pink) 40%
Line 355: rgba(7,70,92,1) 40%
Line 356: rgba(7,70,92,1) 100%

Line 372: width: 100%
Line 374: height: 200px
Line 375: max-height: 50%
Line 376: background-color: var(--light-pink)
Line 377: border-radius: 200px 200px 0 0
Line 378: margin: 0 auto 10px auto

Line 381: background-color: var(--light-pink)
Line 382: width: 100%
Line 383: margin: 15px auto
Line 386: height: 15px
Line 389: height: 10px
Line 392: height: 5px

Line 397: transform: rotate(35deg)
Line 398: padding: 50px 50px 100px 50px
Line 402: max-width: 50%
Line 403: padding: 10px
Line 407: margin-bottom: 1.5em
Line 409: font-size: 1em

Line 419: padding-top: 60px
Line 421: margin: 0 30%
Line 422: margin-bottom: 40px

Line 430: width: 40%
Line 432: max-height: 600px
Line 433: height: 100%
Line 438: margin-bottom: 30px

Line 440: background: linear-gradient(180deg, rgba(8,28,30,1) 10%, rgba(173,17,93,1) 10%, rgba(255,110,81,1) 100%)
Line 441: linear-gradient(270deg, rgba(8,28,30,1) 20%, transparent 100%)

Line 446: width: 95%
Line 447: max-width: 1000px
Line 448: z-index: 1
Line 449: margin-left: 5%
Line 450: outline: 10px solid #081c1e
Line 451: outline-offset: -10px

Line 456: background: var(--dark-cyan)
Line 458: display: flex
Line 461: padding: 20px 30px
Line 464: display: flex
Line 466: flex-wrap: wrap
Line 471: list-style-type: none
Line 475: color: white
Line 477: margin: 10px auto
Line 480: color: var(--light-pink)
Line 483: border-radius: 7px
Line 484: padding: 5px
Line 485: background: #ef1d84
Line 486: box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)
Line 490: text-shadow: -1px 2px 0px var(--orange)
Line 491: font-weight: 800

Line 495: @media only screen and (max-width: 1140px)
Line 499: padding: 40px

Line 505–515: repeated gradient stop values (35deg, percentages)

Line 517: radial-gradient(circle at 45% 55%, ...)
Line 518: var(--light-pink) 40%
Line 519: rgba(7,70,92,1) 40%
Line 520: rgba(7,70,92,1) 100%

Line 524: @media only screen and (max-width: 768px)
Line 526: font-size: 0.75em
Line 531: display: block
Line 532: z-index: 999
Line 533: padding-right: 10px
Line 536: position: fixed
Line 539: right: -100%
Line 540: width: 200px
Line 541: height: 100vh
Line 542: background-color: #222
Line 544: padding: 80px 0 30px 0
Line 545: transition: right 0.3s ease
Line 546: z-index: 998
Line 549: padding-left: 0 0.75em
Line 553: right: 0

Line 558: background-color: transparent
Line 562: transform: rotate(45deg)
Line 563: top: 0
Line 567: transform: rotate(-45deg)
Line 569: bottom: 0

Line 574: width: 10%
Line 581: font-size: 2.5em
Line 582: line-height: 1.25em
Line 583: margin-bottom: 0.5em
Line 586: font-size: 0.75em

Line 591: flex-direction: column
Line 595: margin: 0 auto
Line 596: max-height: fit-content
Line 597: padding: 20px auto
Line 603: max-width: 80%
Line 604: width: 80%
Line 606: clip-path: circle(40%)
Line 608: width: 100%
Line 609: max-width: 600px
Line 613: max-width: 80%
Line 614: width: 80%
Line 615: background: var(--dark-cyan)
Line 625: width: 80%
Line 629: font-size: 1em
Line 633: font-size: 2em