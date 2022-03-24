// 实现一个小顶堆

class Dui {
    data = [];

    sort = (ind) => {
        const pid = Math.floor((ind-1) / 2);
        if(pid >= 0) {
            if(this.data[pid] > this.data[ind]) {
                let tmp = this.data[pid];
                this.data[pid] = this.data[ind];
                this.data[ind] = tmp;
                this.sort(pid);
            }
        } 
    }

    push = (num) => {
        this.data.push(num);
        this.sort(this.data.length - 1);
    }

    pop = () => {
        const res = this.data[0];
        this.data[0] = this.data.pop();
        let ind = 0;
        while(ind <= this.data.length) {
            let tmp = ind;

            if(this.data[ind * 2 + 1]  && this.data[ind * 2 + 1] < this.data[tmp]) tmp = ind * 2 + 1;
            if(this.data[ind * 2 + 2] && this.data[ind * 2 + 2] < this.data[tmp]) tmp = ind * 2 + 2;
            if(tmp === ind) break;
            let a = this.data[tmp];
            this.data[tmp] = this.data[ind];
            this.data[ind] = a;
            ind = tmp;
        }
        return res;
    }

    
};

const fn = new Dui();
fn.push(2);
fn.push(1);
fn.push(4);
fn.push(3);
fn.push(5);

let i = 5;
while(i--) {
    console.log(fn.pop());
}