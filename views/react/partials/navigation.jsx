import React from 'react'
import Styled from 'styled-components'

const NavStyle = Styled.div`
.navbar {
	font-family: 'Montserrat', sans-serif;
	margin-top: 3em;
	border: none;
}

.navbar-default .navbar-collapse, .navbar-default .navbar-form {
    background-color: white;
		color: black;
}

.navbar-default {
	.navbar-brand,
	.navbar-nav>li>a {
    color: black;
		
	}
	.navbar-brand {
		font-weight: 700;
		font-size: 1.25em;
		letter-spacing: 3px;
	}
}

.container-fluid {
	background-color: #fff;
}

.navbar-toggle {
	border: none;
}

.icon-bar {
	// color: black;
}

.navbar-default .navbar-toggle:focus, .navbar-default .navbar-toggle:hover {
    background-color: #fff;
}

.navbar-default .navbar-toggle .icon-bar {
    background-color: black;
}

`

const Navigation = (props) => {
	return (
	<NavStyle>
		<nav class="navbar navbar-default">
	        <div class="container-fluid">
	            <div class="navbar-header">
	                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
	                    <span class="sr-only">Toggle navigation</span>
	                    <span class="icon-bar"></span>
	                    <span class="icon-bar"></span>
	                    <span class="icon-bar"></span>
	                </button>
	            </div>
	            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	                <ul class="nav navbar-nav navbar-right mx-auto">
	                    <li><a href="#">HOME</a></li>
	                    <li><a href="#">ABOUT</a></li>
	                </ul>
	            </div>
	        </div>
	    </nav>
	</NavStyle>
	)
}

export default Navigation