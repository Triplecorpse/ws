module.exports = class ManifestMessage {
    constructor() {
        this.data = {
            applications: [
                {
                    application_id: '8e3ff2af-7c2a-443a-809c-8bbf755da770',
                    checksum: '228211b6944225288cd60437765c500a0503ae4cd4f1ef2237bdbd206c38f391',
                    name: 'Bird View App',
                    uri: 'http://localhost:8080/app/Bird View App/8e3ff2af-7c2a-443a-809c-8bbf755da770'
                },
                {
                    application_id: '1adc9b4d-1311-4a75-a833-ce5fa380a37a',
                    checksum: '9f291f54b1ed360d986f2539806baf6313b44a6255d1505ab966863732e35d8f',
                    name: 'HTML Video',
                    uri: 'http://localhost:8080/app/HTML Video/1adc9b4d-1311-4a75-a833-ce5fa380a37a'
                }
            ],
            contents: [
                {
                    application_ref: '8e3ff2af-7c2a-443a-809c-8bbf755da770',
                    assets: [
                        {
                            checksum: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
                            id: '738',
                            preview_uri: 'https://adv-ems-testing.s3.amazonaws.com:443/assets/thumbnails/2017/09/21/780689ab-8a13-48a0-b428-42e45caa1e46-thumbnail.jpg?Signature=xGAzCJhq7dn8Q3PD%2FwhDTKFpRnI%3D&Expires=1506701072&AWSAccessKeyId=AKIAJLTYERLY4X5M2KRQ',
                            role: 'main',
                            uri: 'http://localhost:8080/asset/819037b7-73d1-405c-a40e-19c8b93f003d.mp4'
                        }
                    ],
                    id: '119',
                    trigger_group: {
                        operator: 'IS_BETWEEN',
                        type: 'AGE',
                        value: '0,100'
                    }
                },
                {
                    application_ref: '1adc9b4d-1311-4a75-a833-ce5fa380a37a',
                    assets: [
                        {
                            checksum: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
                            id: '739',
                            preview_uri: 'https://adv-ems-testing.s3.amazonaws.com:443/assets/thumbnails/2017/09/21/1638cbd9-e10d-497b-9dec-6435207ea8cb-thumbnail.jpg?Signature=NucY36M73%2FicNvHlM%2Bi4XTUaAks%3D&Expires=1506701072&AWSAccessKeyId=AKIAJLTYERLY4X5M2KRQ',
                            role: 'main',
                            uri: 'http://localhost:8080/asset/b0e9a5db-3612-450c-bb11-7606cc246428.mp4'
                        }
                    ],
                    id: '118',
                    trigger_group: {}
                }
            ],
            'poi-config': {}
        };
        this.subject = 'manifest';
        this.type = 'subject';
    }
}
