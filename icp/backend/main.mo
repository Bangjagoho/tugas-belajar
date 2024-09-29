import Storage "mo:storage";

actor Main {
        public shared(msg) func uploadFile(userId : Principal, fileName : Text, fileData : Blob) : async Bool {
                    return await Storage.uploadFile(userId, fileName, fileData);
        };

            public query func getFiles(userId : Principal) : async [(Text, Blob)] {
                        return await Storage.getFiles(userId);
            };
}

            }
        }
}