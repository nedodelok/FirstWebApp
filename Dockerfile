# pull official base image
FROM python:3.9-alpine

# set work directory
WORKDIR /app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
RUN pip install --upgrade pip
COPY WEB_программирование/requirements.txt .
RUN pip install -r requirements.txt

# copy project
COPY . .

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
