FROM python:3.8

# Create app directory
WORKDIR /app

# Install app dependencies
COPY src/requirements.txt ./

RUN pip install -r requirements.txt

# Bundle app source
COPY src /app

ENV DATEBASE_NAME="AWSMeetupGroupESDB"
ENV TABLE_NAME="CryptoData"
ENV AWS_REGION="us-east-1"
ENV CRYPTO_SYMBOL="BCH"
ENV API_URL="http://127.0.0.1:8080"
ENV ACCESS_KEY_ID="get your own key id :)"
ENV SECRET_ACCESS_KEY="key your own key :)"

CMD [ "python", "timestream-writer.py" ]