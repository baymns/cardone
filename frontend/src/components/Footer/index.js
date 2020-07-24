import React from 'react';
import './style.css'
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Cardone</h6>
            {/* <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p> */}
          </div>

          {/* <div class="col-xs-6 col-md-3">
            <h6>Категории</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">Автосервис</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">Автозапчасти</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">Шиномонтаж</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Автозаправка</a></li>
              <li><a href="http://scanfcode.com/category/android/">Автомойка</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Эвакуатор</a></li>
            </ul>
          </div> */}

          <div className="col-xs-6 col-md-3">
            <h6>Полезные ссылки</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/about/">О приложении</a></li>
              <li><a href="http://scanfcode.com/contact/">Контакты</a></li>
              {/* <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li> */}
              <li><a href="http://scanfcode.com/privacy-policy/">Политика конфиденциальности</a></li>
              {/* <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li> */}
            </ul>
          </div>
        </div>
        <hr></hr>
      </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by 
         <a href="#"> Cardone</a>.
            </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href="#"><i className="fab fa-facebook"></i></a></li>
                <li><a className="twitter" href="#"><i className="fab fa-twitter"></i></a></li>
                {/* <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li> */}
                <li><a className="linkedin" href="#"><i className="fab fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
</footer>
  );
}

export default Footer;
