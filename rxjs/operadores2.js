import { Observable, concatAll, from } from "rxjs";
import axios from "axios";

const observable = new Observable((subscriber) => {
	const data = axios
		.get("https://api.github.com/users/herloncosta/repos")
		.then((resp) => resp.data);

	subscriber.next(data);
});

observable.pipe(concatAll()).subscribe((repos) => {
	from(repos).subscribe((repo) => console.log(repo.full_name));
});
