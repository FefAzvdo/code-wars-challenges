function zero(arg) {
	if (arg) {
		return arg(0);
	}
	return 0;
}
function one(arg) {
	if (arg) {
		return arg(1);
	}
	return 1;
}
function two(arg) {
	if (arg) {
		return arg(2);
	}
	return 2;
}
function three(arg) {
	if (arg) {
		return arg(3);
	}
	return 3;
}
function four(arg) {
	if (arg) {
		return arg(4);
	}
	return 4;
}
function five(arg) {
	if (arg) {
		return arg(5);
	}
	return 5;
}
function six(arg) {
	if (arg) {
		return arg(6);
	}
	return 6;
}
function seven(arg) {
	if (arg) {
		return arg(7);
	}
	return 7;
}
function eight(arg) {
	if (arg) {
		return arg(8);
	}
	return 8;
}
function nine(arg) {
	if (arg) {
		return arg(9);
	}
	return 9;
}

function plus(a) {
	return (b) => {
		return a + b;
	};
}
function minus(a) {
	return (b) => {
		return a - b;
	}function zero(arg) {
	if (arg) {
		return arg(0);
	}
	return 0;
}
function one(arg) {
	if (arg) {
		return arg(1);
	}
	return 1;
}
function two(arg) {
	if (arg) {
		return arg(2);
	}
	return 2;
}
function three(arg) {
	if (arg) {
		return arg(3);
	}
	return 3;
}
function four(arg) {
	if (arg) {
		return arg(4);
	}
	return 4;
}
function five(arg) {
	if (arg) {
		return arg(5);
	}
	return 5;
}
function six(arg) {
	if (arg) {
		return arg(6);
	}
	return 6;
}
function seven(arg) {
	if (arg) {
		return arg(7);
	}
	return 7;
}
function eight(arg) {
	if (arg) {
		return arg(8);
	}
	return 8;
}
function nine(arg) {
	if (arg) {
		return arg(9);
	}
	return 9;
}

function plus(a) {
	return (b) => {
		return a + b;
	};
}
function minus(a) {
	return (b) => {
    let conta = a - b;
		if(b > a){
      return conta * -1
    }
    else return conta * -1
	};
}
function times(a) {
	return (b) => {
		return a * b;
	};
}
function dividedBy(a) {
	return (b) => {
    if(b%a == 0){
      return b/a
    }
    else if ((b/a) < 0){
      return 0
    }
    else return Math.floor((b/a))
	};
}

}
function times(a) {
	return (b) => {
		return a * b;
	};
}
function dividedBy(a) {
	return (b) => {
		return (a / b).toFixed(0);
	};
}
