---
title: Pet Enrichment Toy
publishDate: 2024-08-01 00:00:00
img: /assets/work/pet/pet.jpg
img_alt: Pet Enrichment Toy prototype
description: |
  GE 1501 Mini Project: IHop
tags:
  - Research
  - CAD
  - Test
---

<div class="project-header-box">
    <h1>About the Project</h1>
    <p>
        IHOP is a Fidget Box enrichment toy designed to engage and stimulate domestic rabbits. 
        The project focused on understanding animal behavior to create a device that encourages 
        natural foraging and problem-solving through interactive mechanical components.
    </p>
</div>

<div class="project-grid">
    <img src="../../assets/work/pet/pet-1.jpg" alt="IHop prototype view 1">
    <img src="../../assets/work/pet/pet-4.jpg" alt="IHop prototype view 2">
    <img src="../../assets/work/pet/pet-3.jpg" alt="CAD Design process">
    <img src="../../assets/work/pet/pet-2.jpg" alt="Material testing">
</div>

<div class="iframe-container">
    <iframe 
        src="../../assets/work/pet/GE1501_ Mini-project Reflection Paper.pdf" 
        title="GE 1501 Reflection Paper"
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

    /* 2x2 Grid - Replaces md:grid grid-cols-2 grid-rows-2 gap-2 */
    .project-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.75rem;
        margin-bottom: 2rem;
    }

    .project-grid img {
        width: 100%;
        height: auto;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        border-radius: 0.5rem;
        border: 1px solid var(--gray-800);
    }

    /* PDF Wrapper - Replaces w-full h-[800px] */
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
        .project-grid {
            grid-template-columns: 1fr; /* Stack images on small screens */
        }

        .project-header-box {
            padding: 1.5rem;
        }

        .iframe-container iframe {
            height: 500px;
        }
    }
</style>