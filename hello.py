import matplotlib.pyplot as plt
import mpld3
import numpy as np
import math
from flask import Flask,render_template,url_for,request,redirect
app=Flask(__name__)


@app.route('/')
def main():
	return render_template('main.html')

@app.route('/new')
def new():
    return render_template('new.html')

@app.route('/real_new')
def real_new():
    return render_template('real_new.html')

@app.route('/input',methods=['POST'])
def graph_make():
	a=request.form['a']
	b=request.form['b']
	c=request.form['c']
	d=request.form['d']
	graph_type=request.form['graph_type']
	if(graph_type=='sin'):
		x=np.arange(-10,10,0.01)
		y=int(a)*np.sin(int(b)*(x-int(c)))+int(d)
	elif(graph_type=='cos'):
		x=np.arange(-10,10,0.01)
		y=int(a)*np.cos(int(b)*(x-int(c)))+int(d)
	elif(graph_type=='tan'):
		x=np.arange(-10,10,0.01)
		y = (np.sin(x)) / (np.cos(x))
		tol = 10
		y[y > tol] = np.nan
		y[y < -tol] = np.nan
	f=plt.figure()
	plt.plot(x,y)
	q=x-x
	plt.plot(x,q,color='black')
	plt.plot(q,x,color='black')
	html=mpld3.fig_to_html(f)
	new=open('templates/real_new.html','w')
	new.write(html)
	new.close()
	return redirect('/')
	
if __name__ == '__main__':
	app.run(port=8000,debug=True)