FROM python:3.8	

# Create app directory
WORKDIR /app

# Install app dependencies
COPY src/requirements.txt ./

RUN pip install -r requirements.txt

# Bundle app source
COPY src /app

ENV API_KEY="get your own api key :)"

EXPOSE 8080
CMD [ "python", "server.py" ]	