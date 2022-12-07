FROM php:8.1.2-apache

#ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
#RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
#RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

RUN docker-php-ext-install mysqli pdo pdo_mysql \
    && a2enmod rewrite

RUN curl -sS https://getcomposer.org/installer | php -- \
        &&  mv composer.phar /usr/local/bin/composer
