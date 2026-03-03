---
title: Biomimetic Grip System
publishDate: 2025-04-01 00:00:00
img: /assets/work/bgs/bgs.jpg
img_alt: Biomimetic Grip System prototype detail
description: |
  GE 1502 Term Project: Polar Paws
tags:
  - Video
  - Design
  - Research
---

<div class="project-header-box">
    <h1>About the Project</h1>
    <ul class="project-details">
        <li>Video produced as the final project deliverable</li>
        <li>Documentation of the full engineering design process</li>
        <li>Overview of design iterations and critical engineering decisions</li>
        <li>Live testing and data collection included</li>
    </ul>
</div>

<div class="featured-image">
    <img src="../../assets/work/bgs/bgs-1.jpg" alt="Biomimetic Grip testing setup">
</div>

<div class="video-container">
    <iframe 
        src="https://www.youtube.com/embed/jltoaLt_CZ0" 
        title="Biomimetic Grip System - Polar Paws" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
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
        margin-bottom: 1.5rem;
    }

    .project-details {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .project-details li {
        font-size: var(--text-md);
        color: var(--gray-300);
        padding-left: 1.5rem;
        position: relative;
    }

    /* Custom Green Bullet */
    .project-details li::before {
        content: "→";
        position: absolute;
        left: 0;
        color: var(--accent-regular);
        font-weight: bold;
    }

    .featured-image {
        margin-bottom: 2rem;
    }

    .featured-image img {
        width: 100%;
        border-radius: 0.5rem;
        border: 1px solid var(--gray-800);
    }

    /* Video Wrapper - Replaces w-full h-[800px] */
    .video-container {
        width: 100%;
        aspect-ratio: 16 / 9; /* Professional video ratio */
        margin-top: 2rem;
    }

    .video-container iframe {
        width: 100%;
        height: 100%;
        border: 1px solid var(--gray-800);
        border-radius: 0.5rem;
    }

    @media (max-width: 50em) {
        .project-header-box {
            padding: 1.5rem;
        }
        
        .video-container {
            aspect-ratio: 4 / 3; /* Better for mobile viewing */
        }
    }
</style>