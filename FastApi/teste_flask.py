from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return "Funcionando!"

if __name__ == '__main__':
    app.run(port=3375)
