---
title: Wearable Animal Tech
publishDate: 2020-03-04 00:00:00
img: /assets/work/wat/wat-1.jpg
img_alt: GE 1501 Final Project:D.O.U.G
description: |
  GE 1501 Final Project: D.O.U.G
tags:
  - Code
  - CAD
  - Lazer Cutting
---

<div class="project-header-box">
    <h1>About the Project</h1>
    <p>This project involved designing a mechanical turtle flipper, followed by fabrication using laser-cut wood, hardware wiring, and C++ coding for movement control.</p>
</div>

<div class="image-grid">
    <img src="../../assets/work/wat/wat-2.jpg" alt="Flipper fabrication detail">
    <img src="../../assets/work/wat/wat-3.jpg" alt="Wiring and assembly">
</div>

<div class="iframe-container">
    <iframe 
        src="../../assets/work/wat/Design Report - GE1501_ Group 8 (1).pdf" 
        title="D.O.U.G Design Report"
    ></iframe>
</div>

<style>
    /* Header Box - Replaces bg-slate-600 rounded-xl p-10 */
    .project-header-box {
        background-color: var(--gray-800);
        border-radius: 0.75rem;
        padding: 2.5rem;
        margin-bottom: 2rem;
        border: 1px solid var(--gray-700);
    }

    .project-header-box h1 {
        font-size: var(--text-2xl);
        color: var(--gray-0);
        margin-bottom: 1rem;
    }

    .project-header-box p {
        font-size: var(--text-md);
        color: var(--gray-300);
        line-height: 1.6;
    }

    /* Responsive Image Grid - Replaces grid grid-cols-2 gap-2 */
    .image-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.5rem;
        margin-bottom: 2rem;
    }

    .image-grid img {
        width: 100%;
        height: auto;
        border-radius: 0.5rem;
        object-fit: cover;
        border: 1px solid var(--gray-800);
    }

    /* PDF Iframe - Replaces w-full h-[800px] */
    .iframe-container {
        width: 100%;
        margin-top: 2rem;
    }

    .iframe-container iframe {
        width: 100%;
        height: 800px;
        border: 1px solid var(--gray-800);
        border-radius: 0.5rem;
    }

    /* Mobile Adjustments */
    @media (max-width: 50em) {
        .image-grid {
            grid-template-columns: 1fr; /* Stack images on mobile */
        }
        
        .project-header-box {
            padding: 1.5rem;
        }

        .iframe-container iframe {
            height: 500px;
        }
    }
</style>