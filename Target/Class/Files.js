class o{In=async(...[t])=>{for(const[a,s]of await(await import("../Function/In.js")).default(t,this.Plan.Paths))this.Plan.Paths.set(a,s);return this};By=async(...[t])=>(this.Plan.Results=await(await import("../Function/By.js")).default(t,this.Plan.Paths,this.Plan.Results),this);Not=async(...[t])=>(this.Plan.Results=await(await import("../Function/Not.js")).default(t,this.Plan.Results),this);Pipe=async(...[t])=>(this.Plan=await(await import("../Function/Pipe.js")).default(this.Plan,e(r,t??{})),this);Plan={Cache:i,Files:0,Logger:n,Info:{},Paths:new Map,Results:new Map,On:{Buffer:"",After:0,Before:0,Input:"",Output:""}};constructor(t,a){this.Plan.Cache=typeof t=="object"?e(this.Plan.Cache,t):this.Plan.Cache,this.Plan.Logger=typeof a=="number"?a:this.Plan.Logger}}const{default:{Cache:i,Logger:n,Action:r}}=await import("../Variable/Option.js"),{default:e}=await import("typescript-esbuild/Target/Function/Merge.js");export{r as Action,i as Cache,n as Logger,e as Merge,o as default};
