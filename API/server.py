from flask import Flask, redirect, jsonify
from flask_mysqldb import MySQL
import MySQLdb.cursors

app=Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'review'
mysql = MySQL(app)

@app.route('/product_list')
def product_list():
    cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    # with mysql.connection.cursor() as cursor:
    cursor.execute('SELECT * FROM products')
    result = cursor.fetchall()
    return jsonify(result)

if __name__ == '__main__':
    app.run(host='192.168.18.10' , port=19002, debug=True)