<!doctype html>
<html lang="ms">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>AAE Pesara Tentera — Bina Legasi Selepas Berbakti</title>
    <meta name="description" content="Landing page A-Cond Auto Expert khas untuk pesara tentera.">
    <style>
        :root {
            --navy: #071321;
            --navy2: #102942;
            --paper: #f7f3e9;
            --gold: #d7ad5d;
            --gold2: #f0d99e;
            --red: #b51d2e;
            --green: #1da45c;
            --ink: #162235;
            --muted: #687384;
            --white: #fff;
            --r: 24px;
            --shadow: 0 24px 65px rgba(6, 20, 35, .16)
        }

        * {
            box-sizing: border-box
        }

        html {
            scroll-behavior: smooth
        }

        body {
            margin: 0;
            font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
            background: var(--paper);
            color: var(--ink);
            line-height: 1.65
        }

        a {
            color: inherit
        }

        .wrap {
            width: min(1160px, calc(100% - 36px));
            margin: auto
        }

        .nav {
            position: absolute;
            z-index: 10;
            top: 0;
            left: 0;
            right: 0;
            padding: 20px 0;
            color: #fff
        }

        .navin,
        .footin {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px
        }

        .brand {
            display: flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
            font-weight: 900
        }

        .logo {
            width: 46px;
            height: 46px;
            border-radius: 13px;
            display: grid;
            place-items: center;
            background: linear-gradient(145deg, var(--gold2), var(--gold));
            color: var(--navy);
            box-shadow: 0 12px 28px #0005
        }

        .brand small {
            display: block;
            color: #aebccc;
            font-size: .67rem;
            letter-spacing: .08em;
            text-transform: uppercase
        }

        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 9px;
            min-height: 52px;
            padding: 0 22px;
            border-radius: 999px;
            text-decoration: none;
            font-weight: 900;
            border: 0;
            cursor: pointer;
            transition: .2s
        }

        .btn:hover {
            transform: translateY(-2px)
        }

        .primary {
            background: linear-gradient(135deg, var(--red), #d22d40);
            color: #fff;
            box-shadow: 0 14px 32px rgba(181, 29, 46, .34)
        }

        .ghost {
            color: #fff;
            border: 1px solid #ffffff2d;
            background: #ffffff12
        }

        .wa {
            background: var(--green);
            color: #fff;
            box-shadow: 0 15px 35px #1da45c55
        }

        .hero {
            position: relative;
            min-height: 860px;
            color: #fff;
            padding: 135px 0 110px;
            display: flex;
            align-items: center;
            overflow: hidden;
            background: radial-gradient(circle at 80% 15%, #d7ad5d2b, transparent 28%), linear-gradient(120deg, #06111f 0%, #0a1b2e 48%, #173651 100%)
        }

        .hero:before {
            content: "";
            position: absolute;
            inset: 0;
            background-image: linear-gradient(#ffffff08 1px, transparent 1px), linear-gradient(90deg, #ffffff08 1px, transparent 1px);
            background-size: 44px 44px;
            mask-image: linear-gradient(#000, transparent)
        }

        .heroGrid {
            position: relative;
            display: grid;
            grid-template-columns: 1.08fr .92fr;
            gap: 58px;
            align-items: center
        }

        .tag {
            display: inline-flex;
            align-items: center;
            gap: 9px;
            padding: 8px 13px;
            border: 1px solid #d7ad5d66;
            border-radius: 999px;
            color: var(--gold2);
            font-size: .78rem;
            font-weight: 900;
            letter-spacing: .12em;
            text-transform: uppercase
        }

        .tag:before {
            content: "";
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--gold);
            box-shadow: 0 0 0 5px #d7ad5d22
        }

        h1,
        h2,
        h3,
        p {
            margin-top: 0
        }

        h1 {
            max-width: 860px;
            margin: 20px 0;
            font-size: clamp(2.7rem, 6vw, 5.8rem);
            line-height: 1.02;
            letter-spacing: -.055em
        }

        h1 span {
            color: var(--gold2)
        }

        h2 {
            margin-bottom: 15px;
            font-size: clamp(2rem, 4vw, 3.55rem);
            line-height: 1.08;
            letter-spacing: -.04em
        }

        h3 {
            line-height: 1.16
        }

        .lead {
            font-size: clamp(1.05rem, 1.55vw, 1.24rem);
            color: var(--muted)
        }

        .hero .lead {
            color: #ccd6e3;
            max-width: 760px
        }

        .actions {
            display: flex;
            gap: 13px;
            flex-wrap: wrap;
            margin: 28px 0
        }

        .miniTrust {
            display: flex;
            flex-wrap: wrap;
            gap: 22px;
            color: #b6c3d2;
            font-size: .91rem;
            font-weight: 750
        }

        .miniTrust span:before {
            content: "•";
            color: var(--gold);
            margin-right: 8px
        }

        .visual {
            position: relative;
            min-height: 570px
        }

        .photo {
            position: absolute;
            border-radius: 26px;
            overflow: hidden;
            border: 1px solid #ffffff24;
            box-shadow: 0 35px 85px #0007;
            background: linear-gradient(145deg, #2b4762, #0c1e31)
        }

        .photo.big {
            inset: 28px 0 38px 82px;
            transform: rotate(2deg)
        }

        .photo.small {
            width: 218px;
            height: 290px;
            left: -16px;
            bottom: 0;
            z-index: 2;
            transform: rotate(-5deg)
        }

        .placeholder {
            position: absolute;
            inset: 0;
            padding: 24px;
            display: flex;
            align-items: flex-end;
            background: linear-gradient(to top, #06111ff2, transparent 58%), radial-gradient(circle at 55% 27%, #d7ad5d45, transparent 32%), repeating-linear-gradient(135deg, #ffffff09 0 1px, transparent 1px 18px)
        }

        .placeholder:before {
            content: "";
            position: absolute;
            left: 28%;
            top: 13%;
            width: 44%;
            height: 37%;
            border-radius: 50%;
            background: #a9b5c34f
        }

        .placeholder:after {
            content: "";
            position: absolute;
            left: 12%;
            bottom: 17%;
            width: 76%;
            height: 35%;
            border-radius: 50% 50% 14% 14%;
            background: #60799355
        }

        .caption {
            position: relative;
            z-index: 2
        }

        .caption b {
            display: block;
            font-size: 1.1rem
        }

        .caption small {
            color: #b6c4d4
        }

        .badge {
            position: absolute;
            right: 8px;
            top: 0;
            z-index: 3;
            width: 128px;
            aspect-ratio: 1;
            border-radius: 50%;
            display: grid;
            place-items: center;
            text-align: center;
            padding: 16px;
            background: linear-gradient(145deg, #ffe7ae, #c5923a);
            color: var(--navy);
            font-size: .69rem;
            font-weight: 950;
            text-transform: uppercase;
            line-height: 1.16;
            border: 7px solid #ffffff1f;
            box-shadow: 0 18px 45px #0006;
            transform: rotate(7deg)
        }

        .stats {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: #050d19c9;
            border-top: 1px solid #ffffff19;
            backdrop-filter: blur(18px)
        }

        .statsin {
            display: grid;
            grid-template-columns: repeat(4, 1fr)
        }

        .stat {
            padding: 23px 18px;
            border-right: 1px solid #ffffff15
        }

        .stat:last-child {
            border: 0
        }

        .stat b {
            display: block;
            color: var(--gold2);
            font-size: 1.3rem
        }

        .stat span {
            color: #aebccc;
            font-size: .83rem
        }

        section {
            padding: 100px 0
        }

        .head {
            max-width: 760px;
            margin-bottom: 45px
        }

        .center {
            text-align: center;
            margin-left: auto;
            margin-right: auto
        }

        .kick {
            margin-bottom: 8px;
            color: var(--red);
            font-size: .8rem;
            font-weight: 950;
            letter-spacing: .14em;
            text-transform: uppercase
        }

        .grid2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 52px;
            align-items: center
        }

        .card {
            background: #fff;
            border: 1px solid #0a1d310f;
            border-radius: var(--r);
            box-shadow: 0 18px 55px #0a1d3110
        }

        .news {
            padding: 28px;
            transform: rotate(-1.5deg);
            background: #fbfaf5;
            border: 1px solid #d9d2c3;
            box-shadow: var(--shadow)
        }

        .newsTop {
            display: flex;
            justify-content: space-between;
            padding-bottom: 10px;
            border-bottom: 3px solid #171717;
            font-family: Georgia, serif;
            font-weight: 800
        }

        .news h3 {
            font-family: Georgia, serif;
            font-size: clamp(2.1rem, 4vw, 3.3rem);
            letter-spacing: -.04em;
            line-height: .98
        }

        .newsImg {
            height: 180px;
            display: grid;
            place-items: center;
            text-align: center;
            padding: 20px;
            color: #fff;
            font-weight: 900;
            background: linear-gradient(#0007, #0007), repeating-linear-gradient(135deg, #65717d 0 4px, #858f98 4px 8px)
        }

        .news p {
            font-family: Georgia, serif;
            font-size: .9rem;
            margin: 18px 0 0
        }

        .pain {
            display: grid;
            gap: 14px;
            margin-top: 25px
        }

        .painItem {
            display: grid;
            grid-template-columns: 46px 1fr;
            gap: 14px;
            padding: 17px;
            border-radius: 16px;
            background: #b51d2e0d;
            border: 1px solid #b51d2e1f
        }

        .num {
            width: 46px;
            height: 46px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            background: var(--red);
            color: #fff;
            font-weight: 950
        }

        .painItem b {
            display: block
        }

        .painItem p {
            margin: 2px 0 0;
            color: var(--muted)
        }

        .dark {
            position: relative;
            color: #fff;
            background: var(--navy);
            overflow: hidden
        }

        .dark .lead {
            color: #b9c6d5
        }

        .facts,
        .benefits {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px
        }

        .fact {
            min-height: 335px;
            padding: 29px;
            border-radius: 23px;
            background: linear-gradient(145deg, #ffffff13, #ffffff08);
            border: 1px solid #ffffff1c
        }

        .fact .num {
            margin-bottom: 45px;
            border-radius: 50%;
            background: var(--gold);
            color: var(--navy)
        }

        .fact h3 {
            font-size: 1.5rem
        }

        .fact p {
            color: #b8c5d4
        }

        .fact ul {
            padding-left: 18px;
            color: #dce4ed
        }

        .solutionList {
            display: grid;
            gap: 14px;
            margin: 25px 0
        }

        .sol {
            display: grid;
            grid-template-columns: 40px 1fr;
            gap: 13px;
            align-items: center
        }

        .check {
            width: 40px;
            height: 40px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            background: var(--green);
            color: #fff;
            font-weight: 950
        }

        .sol b {
            display: block
        }

        .sol small {
            color: var(--muted)
        }

        .dash {
            padding: 22px;
            border-radius: 28px;
            color: #fff;
            background: #0b1728;
            box-shadow: var(--shadow)
        }

        .dashTop {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px
        }

        .online {
            color: #8ce5b3
        }

        .dashGrid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 13px
        }

        .dashCard {
            padding: 16px;
            min-height: 112px;
            border-radius: 16px;
            background: #ffffff0d;
            border: 1px solid #ffffff15
        }

        .dashCard small {
            color: #9cacc0
        }

        .dashCard b {
            display: block;
            margin-top: 5px;
            font-size: 1.42rem
        }

        .chart {
            grid-column: 1/-1;
            height: 200px;
            padding: 17px
        }

        .bars {
            height: 125px;
            display: flex;
            align-items: flex-end;
            gap: 9px
        }

        .bars i {
            flex: 1;
            border-radius: 7px 7px 2px 2px;
            background: linear-gradient(var(--gold2), var(--gold))
        }

        .trust {
            background: #eee7d7
        }

        .doc {
            padding: 33px
        }

        .logos {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 20px;
            border-bottom: 1px solid #e1e5ea
        }

        .mark {
            width: 64px;
            height: 64px;
            border-radius: 15px;
            display: grid;
            place-items: center;
            text-align: center;
            background: var(--navy);
            color: #fff;
            font-size: .72rem;
            font-weight: 950
        }

        .mark.light {
            background: #f3f0e8;
            color: var(--navy);
            border: 1px solid #dad3c5
        }

        .doc h3 {
            text-align: center;
            font-family: Georgia, serif;
            font-size: 2rem;
            margin: 28px 0
        }

        .sigs {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 35px;
            margin-top: 48px
        }

        .sig {
            border-top: 1px solid #8f99a4;
            padding-top: 8px;
            color: #6f7884;
            font-size: .76rem
        }

        .points {
            display: grid;
            gap: 13px;
            margin-top: 24px
        }

        .point {
            padding: 17px 19px;
            border-radius: 15px;
            background: #ffffff95;
            border: 1px solid #10294212
        }

        .point b {
            display: block
        }

        .point span {
            color: var(--muted)
        }

        .founder {
            background: linear-gradient(120deg, #0c1d31, #183a57);
            color: #fff
        }

        .portrait {
            min-height: 550px;
            position: relative;
            overflow: hidden;
            border-radius: 29px;
            background: linear-gradient(to top, #06111fee, transparent 55%), radial-gradient(circle at 55% 25%, #d7ad5d38, transparent 26%), linear-gradient(145deg, #354f68, #102238);
            border: 1px solid #ffffff1c;
            box-shadow: 0 30px 80px #0005
        }

        .portrait:before {
            content: "";
            position: absolute;
            left: 29%;
            top: 12%;
            width: 42%;
            height: 35%;
            border-radius: 50%;
            background: #aebbc74a
        }

        .portrait:after {
            content: "";
            position: absolute;
            left: 9%;
            bottom: 8%;
            width: 82%;
            height: 46%;
            border-radius: 50% 50% 12% 12%;
            background: #566f8755
        }

        .portrait .caption {
            position: absolute;
            left: 27px;
            right: 27px;
            bottom: 25px
        }

        .quote {
            margin: 25px 0;
            padding: 24px 26px;
            border-left: 4px solid var(--gold);
            border-radius: 0 17px 17px 0;
            background: #ffffff0e;
            color: #f2e4c3;
            font: italic clamp(1.25rem, 2vw, 1.75rem)/1.45 Georgia, serif
        }

        .award {
            display: flex;
            gap: 14px;
            align-items: center;
            color: #d2dce8
        }

        .awardIcon {
            width: 52px;
            height: 52px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            background: var(--gold);
            color: var(--navy);
            font-weight: 950
        }

        .benefits {
            grid-template-columns: repeat(5, 1fr);
            gap: 15px
        }

        .benefit {
            min-height: 295px;
            padding: 23px;
            position: relative;
            overflow: hidden
        }

        .benefit:after {
            content: attr(data-n);
            position: absolute;
            right: 10px;
            bottom: -22px;
            color: #1029420a;
            font-size: 7rem;
            font-weight: 950;
            line-height: 1
        }

        .benefitIcon {
            width: 50px;
            height: 50px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            background: var(--navy2);
            color: #fff;
            font-weight: 950;
            margin-bottom: 45px
        }

        .benefit p {
            color: var(--muted);
            font-size: .92rem
        }

        .proofGrid {
            display: grid;
            grid-template-columns: 1.05fr .95fr;
            gap: 45px;
            align-items: center
        }

        .metrics {
            display: grid;
            gap: 14px
        }

        .metric {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 18px;
            padding: 20px 22px;
            border-radius: 17px;
            background: #ffffff0e;
            border: 1px solid #ffffff17
        }

        .metric span {
            color: #adbdce
        }

        .metric b {
            font-size: clamp(1.4rem, 3vw, 2rem);
            color: var(--gold2)
        }

        .metric.hot {
            background: linear-gradient(135deg, #b51d2ee6, #811221e8)
        }

        .metric.hot span,
        .metric.hot b {
            color: #fff
        }

        .roi {
            padding: 36px;
            text-align: center;
            border-radius: 28px;
            color: var(--navy);
            background: linear-gradient(145deg, #f2d896, #c18d35);
            box-shadow: 0 24px 65px #0006
        }

        .roi small {
            font-weight: 950;
            letter-spacing: .13em;
            text-transform: uppercase
        }

        .roiBig {
            margin: 20px 0 4px;
            font-size: clamp(4rem, 8vw, 6.8rem);
            font-weight: 950;
            line-height: .9;
            letter-spacing: -.07em
        }

        .offerGrid {
            display: grid;
            grid-template-columns: 1.1fr .9fr;
            gap: 35px
        }

        .priceCard {
            padding: 42px;
            color: #fff;
            border-radius: 29px;
            background: linear-gradient(145deg, var(--navy), var(--navy2));
            box-shadow: var(--shadow)
        }

        .priceCard small {
            color: var(--gold2);
            font-weight: 950;
            letter-spacing: .12em;
            text-transform: uppercase
        }

        .price {
            margin: 13px 0;
            font-size: clamp(3.2rem, 7vw, 5.8rem);
            line-height: .9;
            font-weight: 950;
            letter-spacing: -.065em
        }

        .priceCard>p {
            color: #bdc9d7
        }

        .include {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            margin-top: 27px
        }

        .include span {
            padding: 11px;
            border-radius: 12px;
            background: #ffffff0d;
            color: #dae2ec;
            font-size: .89rem
        }

        .side {
            display: grid;
            gap: 16px
        }

        .note {
            padding: 25px
        }

        .note b {
            display: block;
            font-size: 1.15rem
        }

        .note p {
            margin: 5px 0 0;
            color: var(--muted)
        }

        .guarantee {
            background: linear-gradient(120deg, #eee5d2, #fffaf0)
        }

        .seal {
            width: min(100%, 410px);
            aspect-ratio: 1;
            margin: auto;
            border-radius: 50%;
            display: grid;
            place-items: center;
            text-align: center;
            padding: 68px;
            color: #fff;
            background: radial-gradient(circle, #1d3c5a 0 57%, #071321 58%);
            border: 14px solid var(--gold);
            outline: 1px dashed #07132166;
            outline-offset: 13px;
            box-shadow: 0 26px 65px #07132138
        }

        .seal b {
            display: block;
            color: var(--gold2);
            font-size: clamp(3.8rem, 8vw, 6rem);
            line-height: .9
        }

        .seal span {
            font-weight: 950;
            text-transform: uppercase;
            letter-spacing: .1em
        }

        .scarcity {
            margin-top: 25px;
            padding: 20px;
            border-radius: 16px;
            background: #b51d2e0d;
            border: 1px solid #b51d2e2a
        }

        .scarcity b {
            display: block;
            color: var(--red)
        }

        .cta {
            text-align: center;
            color: #fff;
            background: radial-gradient(circle at 50% 16%, #d7ad5d2d, transparent 32%), linear-gradient(145deg, #06101d, #102942)
        }

        .ctaBox {
            max-width: 950px;
            margin: auto;
            padding: 52px;
            border-radius: 29px;
            background: #ffffff0d;
            border: 1px solid #ffffff1c;
            box-shadow: 0 30px 80px #0005
        }

        .cta .lead {
            color: #bdc9d8
        }

        .steps {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 14px;
            margin: 30px 0;
            text-align: left
        }

        .step {
            padding: 20px;
            border-radius: 16px;
            background: #ffffff0d;
            border: 1px solid #ffffff16
        }

        .step b {
            color: var(--gold2);
            font-size: 1.3rem
        }

        .step span {
            display: block;
            color: #c3cedb;
            margin-top: 5px
        }

        .warning {
            padding: 72px 0;
            background: #8e1423;
            color: #fff
        }

        .warningIn {
            display: grid;
            grid-template-columns: auto 1fr auto;
            gap: 25px;
            align-items: center
        }

        .warnIcon {
            width: 68px;
            height: 68px;
            border-radius: 19px;
            display: grid;
            place-items: center;
            background: #ffffff15;
            font-size: 1.8rem;
            font-weight: 950
        }

        .warning h2 {
            font-size: clamp(1.8rem, 3.3vw, 2.8rem);
            margin-bottom: 6px
        }

        .warning p {
            margin: 0;
            color: #f3d5da
        }

        .faq {
            max-width: 900px;
            margin: auto;
            display: grid;
            gap: 13px
        }

        details {
            padding: 0 21px;
            border-radius: 15px;
            background: #fff;
            border: 1px solid #07132112;
            box-shadow: 0 10px 34px #0713210d
        }

        summary {
            position: relative;
            list-style: none;
            cursor: pointer;
            padding: 21px 38px 21px 0;
            font-weight: 900
        }

        summary::-webkit-details-marker {
            display: none
        }

        summary:after {
            content: "+";
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 28px;
            height: 28px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            background: var(--navy);
            color: #fff
        }

        details[open] summary:after {
            content: "–"
        }

        details p {
            padding: 0 0 20px;
            color: var(--muted)
        }

        footer {
            padding: 31px 0;
            background: #040b14;
            color: #94a4b6;
            font-size: .84rem
        }

        .float {
            position: fixed;
            z-index: 30;
            right: 20px;
            bottom: 20px;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            text-decoration: none;
            background: var(--green);
            color: #fff;
            font-weight: 950;
            font-size: 1.5rem;
            box-shadow: 0 17px 38px #1da45c66
        }

        .reveal {
            opacity: 0;
            transform: translateY(18px);
            transition: .65s
        }

        .reveal.on {
            opacity: 1;
            transform: none
        }

        @media(max-width:1030px) {

            .heroGrid,
            .grid2,
            .proofGrid,
            .offerGrid {
                grid-template-columns: 1fr
            }

            .heroVisual {
                max-width: 650px;
                margin: auto
            }

            .facts {
                grid-template-columns: 1fr
            }

            .benefits {
                grid-template-columns: repeat(2, 1fr)
            }

            .visual {
                max-width: 650px;
                width: 100%;
                margin: auto
            }

            .side {
                grid-template-columns: repeat(3, 1fr)
            }
        }

        @media(max-width:720px) {
            section {
                padding: 74px 0
            }

            .wrap {
                width: min(100% - 26px, 1160px)
            }

            .brand small,
            .nav .btn {
                display: none
            }

            .hero {
                padding: 112px 0 0;
                min-height: auto
            }

            .heroGrid {
                gap: 36px
            }

            .visual {
                min-height: 455px
            }

            .photo.big {
                inset: 28px 0 48px 38px
            }

            .photo.small {
                width: 175px;
                height: 230px
            }

            .badge {
                width: 100px;
                font-size: .57rem
            }

            .stats {
                position: relative;
                margin-top: 24px
            }

            .statsin {
                grid-template-columns: 1fr 1fr
            }

            .stat:nth-child(2) {
                border-right: 0
            }

            .stat:nth-child(-n+2) {
                border-bottom: 1px solid #ffffff15
            }

            .benefits,
            .side,
            .include,
            .steps {
                grid-template-columns: 1fr
            }

            .ctaBox,
            .priceCard {
                padding: 31px 21px
            }

            .warningIn {
                grid-template-columns: 1fr;
                text-align: center
            }

            .warnIcon {
                margin: auto
            }

            .warning .btn {
                width: 100%
            }

            .footin {
                flex-direction: column;
                text-align: center
            }

            .float {
                width: 54px;
                height: 54px;
                right: 14px;
                bottom: 14px
            }
        }

        @media(prefers-reduced-motion:reduce) {
            html {
                scroll-behavior: auto
            }

            .reveal {
                opacity: 1;
                transform: none;
                transition: none
            }
        }
    </style>
</head>

<body>
    <nav class="nav">
        <div class="wrap navin"><a class="brand" href="#top"><span class="logo">AAE</span><span>A-Cond Auto
                    Expert<small>Azam Auto Body Work & Services</small></span></a><a class="btn primary"
                href="#hubungi">Sembang Dengan Kami</a></div>
    </nav>
    <main id="top">
        <header class="hero">
            <div class="wrap heroGrid">
                <div><span class="tag">Edisi Khas Pesara Tentera</span>
                    <h1>Berpuluh Tahun Berbakti Kepada Negara. Kini, Tiba Masanya Tuan <span>Bina Legasi
                            Keluarga.</span></h1>
                    <p class="lead">Duit ganjaran LTAT dan pencen sudah di tangan. Persoalannya: bisnes apa yang
                        untungnya baik, sistemnya boleh dipantau, dan modal Tuan tidak lebur kerana tersalah langkah?
                    </p>
                    <p class="lead"><b>Baca surat terbuka ini khas untuk bekas perwira negara.</b> Kami mahu tunjukkan
                        satu peluang dalam industri yang sentiasa diperlukan rakyat Malaysia.</p>
                    <div class="actions"><a class="btn primary" href="#peluang">Lihat Peluang Perniagaan</a><a
                            class="btn ghost" href="#hubungi">Saya Mahu Sembang Santai</a></div>
                    <div class="miniTrust"><span>Sistem BOMP berstruktur</span><span>Latihan
                            zero-to-hero</span><span>Marketing HQ</span></div>
                </div>
                <div class="visual">
                    <div class="photo big">
                        <div class="placeholder">
                            <div class="caption"><b>Letak gambar Boss Azam di bengkel AAE</b><small>Gambar sebenar,
                                    bengkel aktif dan pencahayaan premium.</small></div>
                        </div>
                    </div>
                    <div class="photo small">
                        <div class="placeholder">
                            <div class="caption"><b>Gambar uniform TUDM</b><small>Visual asal-usul dan
                                    kredibiliti.</small></div>
                        </div>
                    </div>
                    <div class="badge">Ikon Usahawan Industri Automotif<br>AURA MARA</div>
                </div>
            </div>
            <div class="stats">
                <div class="wrap statsin">
                    <div class="stat"><b>33 Juta+</b><span>Kenderaan berdaftar</span></div>
                    <div class="stat"><b>Aircond</b><span>Keperluan harian</span></div>
                    <div class="stat"><b>2 Sumber</b><span>Parts + upah kerja</span></div>
                    <div class="stat"><b>Sistem</b><span>Pantau melalui dashboard</span></div>
                </div>
            </div>
        </header>

        <section>
            <div class="wrap grid2">
                <div class="news reveal">
                    <div class="newsTop"><span>BERITA PESARA</span><span>EDISI KHAS</span></div>
                    <h3>Duit Pencen Lesap Kerana Salah Pilih Bisnes</h3>
                    <div class="newsImg">Ruang visual keratan akhbar / ilustrasi pesara ditipu</div>
                    <p>Ramai pesara memasuki alam perniagaan dengan modal dan semangat yang tinggi, tetapi tanpa sistem
                        operasi, kawalan stok, pemantauan pekerja dan pemasaran yang konsisten.</p>
                </div>
                <div class="reveal">
                    <p class="kick">Realiti Selepas Bersara</p>
                    <h2>Modal Ada. Disiplin Ada. Tetapi Tanpa Sistem, Tuan Boleh Terperangkap.</h2>
                    <p class="lead">Perniagaan yang kelihatan mudah dari luar boleh menjadikan Tuan hamba di kedai
                        sendiri apabila operasi, pekerja, stok dan pemasaran tidak dikawal.</p>
                    <div class="pain">
                        <div class="painItem"><span class="num">01</span>
                            <div><b>Tak Ada Pengalaman Teknikal</b>
                                <p>Tuan belum biasa dengan operasi bengkel dan pengurusan mekanik.</p>
                            </div>
                        </div>
                        <div class="painItem"><span class="num">02</span>
                            <div><b>Sukar Pantau Pekerja & Stok</b>
                                <p>Ketirisan dan harga tidak konsisten sukar dikesan tanpa sistem.</p>
                            </div>
                        </div>
                        <div class="painItem"><span class="num">03</span>
                            <div><b>Pelanggan Tidak Datang Sendiri</b>
                                <p>Bisnes masih perlukan pemasaran dan proses jualan berulang.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="dark" id="peluang">
            <div class="wrap">
                <div class="head center reveal">
                    <p class="kick" style="color:var(--gold2)">Kenapa Industri Aircond Kereta?</p>
                    <h2>Permintaan Yang Sentiasa Ada. Margin Dari Dua Arah.</h2>
                    <p class="lead">Di Malaysia, aircond kereta bukan sekadar keselesaan. Apabila aircond panas,
                        pelanggan mahu masalah diselesaikan segera.</p>
                </div>
                <div class="facts">
                    <article class="fact reveal"><span class="num">1</span>
                        <h3>Lambakan Kenderaan</h3>
                        <p>Jutaan kenderaan berada di jalan raya dan semuanya perlukan servis berkala.</p>
                    </article>
                    <article class="fact reveal"><span class="num">2</span>
                        <h3>Cuaca Panas Terik</h3>
                        <p>Aircond ialah keperluan harian. Kerosakan biasanya tidak boleh ditangguhkan lama.</p>
                    </article>
                    <article class="fact reveal"><span class="num">3</span>
                        <h3>Dua Sumber Keuntungan</h3>
                        <ul>
                            <li>Margin alat ganti pada harga borong.</li>
                            <li>Upah servis, flushing dan troubleshooting.</li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>

        <section>
            <div class="wrap grid2">
                <div class="reveal">
                    <p class="kick">Penyelesaian Berjenama</p>
                    <h2>Tuan Tak Perlu Pandai Pegang Spanar Untuk Buka Bengkel.</h2>
                    <p class="lead">AAE ialah sistem perniagaan berstruktur di bawah Azam Auto Body Work & Services (M)
                        Sdn. Bhd. Melalui BOMP, operasi utama disediakan untuk Tuan.</p>
                    <div class="solutionList">
                        <div class="sol"><span class="check">✓</span>
                            <div><b>Sistem perakaunan & stok</b><small>Pantau jualan, stok dan prestasi melalui
                                    Webmax.</small></div>
                        </div>
                        <div class="sol"><span class="check">✓</span>
                            <div><b>SOP operasi lengkap</b><small>Dari sambut pelanggan sampai serah kunci.</small>
                            </div>
                        </div>
                        <div class="sol"><span class="check">✓</span>
                            <div><b>Pemasaran berpusat oleh HQ</b><small>Facebook, TikTok dan Google untuk kawasan
                                    bengkel.</small></div>
                        </div>
                    </div><a class="btn primary" href="#hubungi">Saya Mahu Tahu Sistem AAE</a>
                </div>
                <div class="dash reveal">
                    <div class="dashTop"><b>AAE Business Dashboard</b><span class="online">● Live</span></div>
                    <div class="dashGrid">
                        <div class="dashCard"><small>Jualan Bulan Ini</small><b>RM39,023</b></div>
                        <div class="dashCard"><small>Untung Kasar</small><b>43.11%</b></div>
                        <div class="dashCard"><small>Stok Aktif</small><b>238 Item</b></div>
                        <div class="dashCard"><small>Job Selesai</small><b>96 Unit</b></div>
                        <div class="dashCard chart"><small>Prestasi Mingguan</small>
                            <div class="bars"><i style="height:35%"></i><i style="height:52%"></i><i
                                    style="height:44%"></i><i style="height:70%"></i><i style="height:61%"></i><i
                                    style="height:86%"></i><i style="height:94%"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="trust">
            <div class="wrap grid2">
                <div class="doc card reveal">
                    <div class="logos"><span class="mark">AAE</span><b>MEMORANDUM<br>OF UNDERSTANDING</b><span
                            class="mark light">KBS<br>IKTBN</span></div>
                    <h3>Kerjasama Pembangunan Kemahiran Automotif</h3>
                    <p>Ruang visual dokumen MoU rasmi bersama IKTBN Bachok di bawah Kementerian Belia dan Sukan.</p>
                    <div class="sigs"><span class="sig">Wakil A-Cond Auto Expert</span><span class="sig">Wakil IKTBN
                            Bachok</span></div>
                </div>
                <div class="reveal">
                    <p class="kick">Credential & Trust</p>
                    <h2>Sistem Yang Dipercayai Institusi Kerajaan.</h2>
                    <p class="lead">Kerjasama rasmi ini merangkumi pembangunan kurikulum, latihan industri, jaminan
                        pekerjaan dan perkongsian teknologi automotif.</p>
                    <div class="points">
                        <div class="point"><b>Kurikulum Teknikal</b><span>Membantu membentuk dan mengemas kini latihan
                                pelajar.</span></div>
                        <div class="point"><b>Latihan Industri & Kerjaya</b><span>Menyediakan tempat OJT dan laluan
                                pekerjaan.</span></div>
                        <div class="point"><b>Pakar Rujuk Automotif</b><span>Perkongsian teknologi terkini kepada tenaga
                                pengajar.</span></div>
                    </div>
                </div>
            </div>
        </section>

        <section class="founder">
            <div class="wrap grid2">
                <div class="portrait reveal">
                    <div class="caption"><b>Letak gambar sebenar Boss Azam</b><small>Interaksi santai bersama pelanggan
                            atau pesara tentera.</small></div>
                </div>
                <div class="reveal">
                    <p class="kick" style="color:var(--gold2)">Inspirasi Pengasas</p>
                    <h2>Dari Uniform TUDM Ke Uniform Korporat.</h2>
                    <p class="lead" style="color:#c5d0dd">Boss Azam sendiri merupakan bekas anggota Tentera Udara Diraja
                        Malaysia. Beliau memahami jerih-perih, disiplin dan kebimbangan seorang pesara yang mahu
                        memulakan hidup baharu.</p>
                    <blockquote class="quote">“Kalau saya boleh buat dan bina sistem ini, saya yakin rakan-rakan pesara
                        di luar sana pasti boleh buat jauh lebih baik.”</blockquote>
                    <div class="award"><span class="awardIcon">★</span>
                        <div><b>Anugerah Ikon Usahawan Industri Automotif</b><br><small>Anugerah AURA MARA
                                2024–2025</small></div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="wrap">
                <div class="head center reveal">
                    <p class="kick">Manfaat Secara Langsung</p>
                    <h2>Masuk Dengan Keyakinan. Operasi Disokong Oleh Sistem.</h2>
                </div>
                <div class="benefits">
                    <article class="benefit card reveal" data-n="1"><span class="benefitIcon">01</span>
                        <h3>Tak Perlu Pandai Baiki Kereta</h3>
                        <p>Latihan “Zero to Hero” untuk pemilik dan mekanik.</p>
                    </article>
                    <article class="benefit card reveal" data-n="2"><span class="benefitIcon">02</span>
                        <h3>HQ Tolong Cari Pelanggan</h3>
                        <p>Sistem marketing berpusat untuk kawasan bengkel Tuan.</p>
                    </article>
                    <article class="benefit card reveal" data-n="3"><span class="benefitIcon">03</span>
                        <h3>Kurangkan Ketirisan</h3>
                        <p>Stok dan transaksi direkod melalui sistem berkomputer.</p>
                    </article>
                    <article class="benefit card reveal" data-n="4"><span class="benefitIcon">04</span>
                        <h3>Harga Barang Borong</h3>
                        <p>Akses alat ganti melalui rangkaian pembekal HQ.</p>
                    </article>
                    <article class="benefit card reveal" data-n="5"><span class="benefitIcon">05</span>
                        <h3>Setup Penuh</h3>
                        <p>Ubah suai, mesin, sistem, stok dan susun atur bengkel.</p>
                    </article>
                </div>
            </div>
        </section>

        <section class="dark">
            <div class="wrap proofGrid">
                <div class="reveal">
                    <p class="kick" style="color:var(--gold2)">Bukti Angka Sebenar</p>
                    <h2>Prestasi Bulan Pertama Cawangan AAE Gua Musang.</h2>
                    <p class="lead">Rekod JBG Auto Garage menunjukkan potensi sistem apabila operasi, harga, stok dan
                        pemasaran bergerak dalam satu rangka kerja.</p>
                    <div class="metrics">
                        <div class="metric"><span>Jualan Keseluruhan</span><b>RM39,023.00</b></div>
                        <div class="metric"><span>Untung Kasar — 43.11%</span><b>RM16,821.64</b></div>
                        <div class="metric hot"><span>Untung Bersih Masuk Poket</span><b>RM10,278.47</b></div>
                    </div>
                </div>
                <div class="roi reveal"><small>Jangkaan Balik Modal</small>
                    <div class="roiBig">18</div>
                    <p>BULAN</p><small>Bergantung pada prestasi dan keadaan operasi sebenar.</small>
                </div>
            </div>
        </section>

        <section>
            <div class="wrap offerGrid">
                <div class="priceCard reveal"><small>Anggaran Pelaburan Keseluruhan</small>
                    <div class="price">RM150,000</div>
                    <p>Tiada kos tersembunyi. Anggaran ini merangkumi komponen utama untuk memulakan bengkel AAE.</p>
                    <div class="include"><span>✓ Yuran jenama</span><span>✓ Ubah suai kedai</span><span>✓ Komputer &
                            CCTV</span><span>✓ Mesin aircond</span><span>✓ Setem guaman</span><span>✓ Stok
                            permulaan</span></div>
                </div>
                <div class="side">
                    <div class="note card reveal"><b>Bajet Belum Cukup?</b>
                        <p>Pasukan boleh membantu menyediakan kertas kerja permohonan dana atau pembiayaan seperti PUNB
                            dan MARA.</p>
                    </div>
                    <div class="note card reveal"><b>Hak Milik Mutlak 100%</b>
                        <p>Ini bukan share saham. Bengkel ialah milik Tuan; AAE membekalkan sistem dan jenama.</p>
                    </div>
                    <div class="note card reveal"><b>Setup 1–2 Bulan</b>
                        <p>Selepas lokasi disahkan, proses ubah suai dan setup penuh dianggarkan mengambil masa satu
                            hingga dua bulan.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="guarantee">
            <div class="wrap grid2">
                <div class="seal reveal">
                    <div><b>100%</b><span>Hak Milik Tuan</span></div>
                </div>
                <div class="reveal">
                    <p class="kick">Pembalikan Risiko</p>
                    <h2>Tuan Adalah Bos Besar Bengkel Tuan Sendiri.</h2>
                    <p class="lead">AAE menyediakan sistem, latihan, jenama dan sokongan. Pemilikan perniagaan kekal
                        pada Tuan.</p>
                    <div class="scarcity"><b>Kuota Mengikut Zon Adalah Terhad</b><span>Demi menjaga kualiti dan
                            eksklusiviti, satu kawasan tidak dibuka secara berlebihan. Zon yang telah diambil mungkin
                            tidak lagi tersedia.</span></div>
                </div>
            </div>
        </section>

        <section class="cta" id="hubungi">
            <div class="wrap">
                <div class="ctaBox reveal"><span class="tag">Langkah Pertama Tanpa Bayaran</span>
                    <h2 style="margin-top:18px">Jangan Terus Melabur. Sembang Dengan Kami Dahulu.</h2>
                    <p class="lead">Tuan tidak perlu bayar apa-apa hari ini. Fahami model perniagaan, semak kawasan dan
                        lihat sendiri sistem sebelum membuat keputusan.</p>
                    <div class="steps">
                        <div class="step"><b>01</b><span>Tekan butang WhatsApp.</span></div>
                        <div class="step"><b>02</b><span>Sembang kopi-kopi secara bersemuka atau online.</span></div>
                        <div class="step"><b>03</b><span>Bila Tuan nampak jalan, barulah kita bergerak.</span></div>
                    </div><a class="btn wa" target="_blank" rel="noopener"
                        href="https://wa.me/?text=Saya%20berminat%20untuk%20sembang%20santai%20tentang%20peluang%20bengkel%20AAE%20khas%20pesara%20tentera.">Saya
                        Berminat — Nak Sembang Santai Dulu</a>
                </div>
            </div>
        </section>

        <section>
            <div class="wrap">
                <div class="head center">
                    <p class="kick">Soalan Lazim</p>
                    <h2>Perkara Yang Selalu Ditanya.</h2>
                </div>
                <div class="faq">
                    <details open>
                        <summary>Saya memang buta bab enjin dan aircond. Boleh ke buat?</summary>
                        <p>Boleh. Tugas utama Tuan ialah mengurus dan memantau pekerja menggunakan sistem yang
                            disediakan. Latihan pengurusan dan teknikal akan diberikan.</p>
                    </details>
                    <details>
                        <summary>Berapa lama nak siapkan bengkel?</summary>
                        <p>Selepas lokasi disahkan, proses ubah suai dan setup penuh dianggarkan mengambil masa lebih
                            kurang satu hingga dua bulan.</p>
                    </details>
                    <details>
                        <summary>Betul ke HQ bantu bab marketing?</summary>
                        <p>Ya. Pasukan marketing HQ akan menjalankan kempen Facebook, TikTok dan Google yang memfokuskan
                            penduduk sekitar radius bengkel.</p>
                    </details>
                </div>
            </div>
        </section>

        <section class="warning">
            <div class="wrap warningIn"><span class="warnIcon">!</span>
                <div>
                    <h2>Duit Pencen Itu Hasil Titik Peluh Tuan.</h2>
                    <p>Jangan biarkan ia susut tanpa arah atau lebur di tangan orang yang salah. Bina perniagaan
                        bersistem yang boleh diwarisi anak cucu.</p>
                </div><a class="btn ghost" href="#hubungi">Bertindak Sekarang</a>
            </div>
        </section>
    </main>
    <footer>
        <div class="wrap footin"><span>© 2026 A-Cond Auto Expert. Visual konsep landing page.</span><span>Nota: gantikan
                ruang placeholder dengan gambar sebenar, logo rasmi dan nombor WhatsApp AAE.</span></div>
    </footer>
    <a class="float" target="_blank" rel="noopener" aria-label="WhatsApp"
        href="https://wa.me/?text=Saya%20berminat%20tentang%20peluang%20bengkel%20AAE.">WA</a>
    <script>
        const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('on') }), { threshold: .12 }); document.querySelectorAll('.reveal').forEach(e => io.observe(e));
    </script>
</body>

</html>