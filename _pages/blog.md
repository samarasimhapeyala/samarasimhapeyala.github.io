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

<h1 style="text-align: center;">Recommendations</h1>

<div class="testimonials">
  <div class="testimonial-container">
    <div class="testimonial-slider" id="testimonialSlider">
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
    </div>
  </div>
</div>

<script>
const slider = document.getElementById('testimonialSlider');
const testimonials = document.querySelectorAll('.testimonial-box');
let index = 0;

function slideTestimonials() {
  const currentOffset = index * -50; // Move by 50% (two cards)
  slider.style.transition = 'transform 0.5s ease';
  slider.style.transform = `translateX(${currentOffset}%)`;
  
  index = (index + 1) % testimonials.length;

  setTimeout(() => {
    slider.appendChild(slider.firstElementChild); // Move the first card to the end
    slider.style.transition = 'none'; // Disable transition
    slider.style.transform = `translateX(0)`; // Reset position
  }, 500); // Match this delay with the transition duration
}

setInterval(slideTestimonials, 2000); // Change every 2 seconds
</script>


<h1 style="text-align: left;">Recommendations</h1>
<p style="font-size: 15px;">These are the recommendations recieved on <a href="https://www.linkedin.com/in/samarasimhapeyala" style="color: rgb(16, 158, 176); text-decoration: none;">Linkedin</a> as we teamed up for the projects</p>
<div class="testimonials">
  <div class="testimonial-container">
    <div class="testimonial-slider" id="testimonialSlider">
      <!-- First recommendation -->
      <div class="testimonial-box">
        <div class="testimonial-content">
          "Samarasimha is very responsible towards his work in the team, he is someone team can always rely on to get the task done. He is highly spirited and completely friendly with other members of the team. I wish him good luck in his future professional life."
        </div>
        <div class="client-info">
          <!--<img src="client1.jpg" alt="Sara Willsson">-->
          <div>
            <div class="client-name"><a href="https://www.linkedin.com/in/rohitsinghonline/">Rohit Singh</a></div>
            <div class="client-title">Azure Data Engineer</div>
          </div>
        </div>
      </div>
      <!-- Second recommendation -->
      <div class="testimonial-box">
        <div class="testimonial-content">
          "Samar has a very good knowledge in core machine learning concepts and he is highly skilled at implementing ML algorithms. Samar is a charismatic person and he fills energy in people around him. He always puts an effort to make everyone around him accomplish more than what they are usually capable of. It was a great pleasure working with him and I wish all the best for his future endeavours."
        </div>
        <div class="client-info">
          <!--<img src="client2.jpg" alt="Jena Karlis">-->
          <div>
            <div class="client-name"><a href="https://www.linkedin.com/in/avinash-gundabathina-10846b140/">Avinash Gundabathina</a></div>
            <div class="client-title">Senior Engineer</div>
          </div>
        </div>
      </div>
      <!-- Third recommendation -->
      <div class="testimonial-box">
        <div class="testimonial-content">
          "I am excited to work with Samar. He is a most practical worker and such an amazing co-worker in team. Apart from good data science and project implementation skills, he guided a team in a proper manner at a right time and most supportive member in team."
        </div>
        <div class="client-info">
          <!--<img src="client3.jpg" alt="Matt Brandon">-->
          <div>
            <div class="client-name"><a href="https://www.linkedin.com/in/charupriya-s-b37504190/">Charupriya S</a></div>
            <div class="client-title">Software Engineer</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

