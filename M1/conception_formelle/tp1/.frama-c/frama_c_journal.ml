(* Frama-C journal generated at 18:13 the 28/02/2022 *)

exception Unreachable
exception Exception of string

[@@@ warning "-26"]

(* Run the user commands *)
let run () =
  Dynamic.Parameter.String.set ""
    "/home/paul/cours/conception_formelle/tp1/Exo1/first-example.c";
  File.init_from_cmdline ();
  Project.set_keep_current false;
  Dynamic.Parameter.String.set "-wp-cache" "none";
  ()

(* Main *)
let main () =
  Journal.keep_file
     (Datatype.Filepath.of_string
     (".frama-c/frama_c_journal.ml"));
  try run ()
  with
  | Unreachable -> Kernel.fatal "Journal reaches an assumed dead code" 
  | Exception s -> Kernel.log "Journal re-raised the exception %S" s
  | exn ->
    Kernel.fatal
      "Journal raised an unexpected exception: %s"
      (Printexc.to_string exn)

(* Registering *)
let main : unit -> unit =
  Dynamic.register
    ~plugin:"Frama_c_journal.ml"
    "main"
    (Datatype.func Datatype.unit Datatype.unit)
    ~journalize:false
    main

(* Hooking *)
let () = Cmdline.run_after_loading_stage main; Cmdline.is_going_to_load ()
