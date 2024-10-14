---
permalink: /contact/
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
.logo-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0;
}
.logo-item {
  text-align: center;
  margin: 10px;
}
.logo-item img {
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
}
.logo-item p {
  font-size: 14px;
  color: #1B1212;
}
.updates-list {
  list-style-type: none;
  padding: 0;
}
.updates-list li {
  margin: 10px 0;
}
.updates-list a {
  color: #4040FF;
  text-decoration: none;
}
.updates-list a:hover {
  text-decoration: underline;
}
.updates-list, h3, p {
  font-size: 14px;
}
</style>
<style>
.research-interest {
  background-color: #f3f6f4; /* Light grey */
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease; /* Smooth transition for background color */
}

.research-interest:hover {
  background-color: #d0d0d0; /* Deeper grey on hover */
}
</style>

<div class="content-container">

<div class="content-container" style="font-family: Arial, sans-serif; line-height: 1.6; font-size: 15px;">

<p>If you feel connecting with me, click here to send a quick message</p>
    
<div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
    <form action="https://formspree.io/mbjzdajy" method="post" role="form" style="border: 2px solid #2985d8; border-radius: 10px; padding: 20px; background-color: #f9f9f9;">
      <h3 class="text-center" style="color: #2985d8;">📩 Contact Me</h3>
      <div class="row">
        <div class="form-group col-md-6">
          <label for="name">👤 Your Name</label>
          <input type="text" name="name" class="form-control" id="name" required>
        </div>
        <div class="form-group col-md-6">
          <label for="email">✉️ Your Email</label>
          <input type="email" class="form-control" name="email" id="email" required>
        </div>
      </div>
      <div class="form-group">
        <label for="subject">📝 Subject</label>
        <input type="text" class="form-control" name="subject" id="subject" required>
      </div>
      <div class="form-group">
        <label for="message">💬 Message</label>
        <textarea class="form-control" name="message" rows="10" required></textarea>
      </div>
      <div class="text-center">
        <button type="submit" style="background-color: #2985d8; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">
          ✉️ Send Message
        </button>
      </div>
    </form>
</div>

