---
permalink: /blog/
author_profile: true
---
{% include base_path %}
<style>
.content-container {
  font-size: 15px;
  color: #1B1212;
  line-height: 1.6;
}
.content-container a {
  text-decoration: none;
  color: #4040FF;
}
.content-container a:hover {
  text-decoration: underline;
}
</style>

<div class="content-container">

<div class="content-container" style="font-family: Arial, sans-serif; line-height: 1.6;">
<div class="content-container" style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; padding: 0; margin: 0;">
    <h1 class="page__title" style="margin: 0;">Blog posts</h1>
    <h2 id="2199" class="archive__subtitle" style="font-size: 15px; margin: 10px 0;"></h2>
    <div class="list__item" style="width: 100%; padding: 0;">
        <article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork" style="margin: 10px 0; padding: 0;">
            <h2 class="archive__item-title" itemprop="headline">
                <a href="https://medium.com/@samarasimhapeyala/measures-and-myths-of-artificial-intelligence-ai-ff47b093f03" rel="permalink" style="color: rgb(16, 158, 176); text-decoration: none;">Measures and Myths of Artificial Intelligence (AI)</a>
            </h2>
            <p class="page__meta" style="font-size: 15px; margin: 5px 0;"><i class="fa fa-clock-o" aria-hidden="true"></i> less than 5 minute read</p>
            <p class="page__date" style="font-size: 15px; margin: 5px 0;"><strong><i class="fa fa-fw fa-calendar" aria-hidden="true"></i> Published:</strong> <time datetime="2199-01-01T00:00:00+00:00">Jul, 2020</time></p>
            <p class="archive__item-excerpt" itemprop="description" style="font-size: 15px; margin: 5px 0;">This post will discuss the common myths about AI and what measures need to be taken to overcome those.</p>
        </article>
    </div>
<br>
  
  <h2 id="2015" class="archive__subtitle" style="font-size: 15px; margin: 10px 0;"></h2>
    <div class="list__item" style="width: 100%; padding: 0;">
        <article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork" style="margin: 10px 0; padding: 0;">
            <h2 class="archive__item-title" itemprop="headline">
                <a href="https://medium.com/@samarasimhapeyala/introduction-to-artificial-intelligence-ai-c3c4acf9f9b3" rel="permalink" style="color: rgb(16, 158, 176);  text-decoration: none;">Introduction to Artificial Intelligence (AI)</a>
            </h2>
            <p class="page__meta" style="font-size: 15px; margin: 5px 0;"><i class="fa fa-clock-o" aria-hidden="true"></i> less than 5 minute read</p>
            <p class="page__date" style="font-size: 15px; margin: 5px 0;"><strong><i class="fa fa-fw fa-calendar" aria-hidden="true"></i> Published:</strong> <time datetime="2015-08-14T00:00:00+00:00">May, 2020</time></p>
            <p class="archive__item-excerpt" itemprop="description" style="font-size: 15px; margin: 5px 0;">This article provides a solid introduction to AI in simple terms for beginners.</p>
        </article>
    </div>
</div>

<br>

<!-- Include CSS styles for recommendations -->
<style>
.testimonials {
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 50px 0;
  background: #f9f9f9;
}

.testimonial-container {
  display: flex;
  transition: transform 0.5s ease;
}

.testimonial-slider {
  display: flex;
  width: 300%; /* Adjusted for more testimonials */
}

.testimonial-box {
  width: 50%; /* Show 2 cards at a time */
  padding: 20px;
  box-sizing: border-box;
  background: white;
  margin: 0 15px;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.testimonial-content {
  font-size: 16px;
  color: #444;
  font-style: italic;
  margin-bottom: 15px;
}

.client-info {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
}

.client-info img {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-right: 15px;
}

.client-info .client-name {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.client-info .client-title {
  font-size: 14px;
  color: #777;
}

/* Add some animation for auto-sliding */
@keyframes slide {
  0% { transform: translateX(0); }
  25% { transform: translateX(-50%); }
  50% { transform: translateX(-100%); }
  75% { transform: translateX(-150%); }
  100% { transform: translateX(0); }
}

.testimonial-slider {
  animation: slide 12s infinite;
}
</style>

<!-- HTML structure for Recommendations -->
<div class="testimonials">
  <h2 style="text-align: center;">Recommendations</h2>
  <div class="testimonial-container">
    <div class="testimonial-slider">
      <!-- First recommendation -->
      <div class="testimonial-box">
        <div class="testimonial-content">
          "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster."
        </div>
        <div class="client-info">
          <img src="client1.jpg" alt="Sara Willsson">
          <div>
            <div class="client-name">Sara Willsson</div>
            <div class="client-title">Designer</div>
          </div>
        </div>
      </div>
      <!-- Second recommendation -->
      <div class="testimonial-box">
        <div class="testimonial-content">
          "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute."
        </div>
        <div class="client-info">
          <img src="client2.jpg" alt="Jena Karlis">
          <div>
            <div class="client-name">Jena Karlis</div>
            <div class="client-title">Store Owner</div>
          </div>
        </div>
      </div>
      <!-- Third recommendation -->
      <div class="testimonial-box">
        <div class="testimonial-content">
          "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore."
        </div>
        <div class="client-info">
          <img src="client3.jpg" alt="Matt Brandon">
          <div>
            <div class="client-name">Matt Brandon</div>
            <div class="client-title">Freelancer</div>
          </div>
        </div>
      </div>
      <!-- Fourth recommendation -->
    </div>
  </div>
</div>

